
import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { QuillViewComponent } from './quill-view';

class Quill {
  options = {};
  editorElement;

  constructor(el: HTMLElement, options: any) {
    el.appendChild(document.createElement('div'));
    this.options = options;
    this.editorElement = el;
  }

  history = {
    clear: () => {}
  };
  clipboard = {
    convert: () => {}
  };
  setContents() {}
  setText() {}
  getContents() {}
  getText() {}
}

(global as any).Quill = Quill;

describe('QuillViewComponent', () => {
  let page: SpecPage;
  let component: QuillViewComponent;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [QuillViewComponent],
      html: `<quill-view styles='{\"height\": \"200px\"}' content="<p>Test</p>" modules='{\"toolbar\":true}'></quill-view>`
    });

    component = await page.rootInstance;
  });

  it('renders and sets default snow theme class', () => {
    expect(page.root).toEqualHtml(`
      <quill-view content="<p>Test</p>" modules="{&quot;toolbar&quot;:true}" styles="{&quot;height&quot;: &quot;200px&quot;}">
        <div class="quill-view" quill-element="" style="height: 200px;">
          <div></div>
        </div>
      </quill-view>
    `);

    expect(component.theme).toEqual('snow');
    expect(component.content).toBe('<p>Test</p>');
    expect(component.format).toEqual('html');
    expect(component.debug).toEqual('warn');
    expect(component.styles).toEqual('{\"height\": \"200px\"}');
    expect(component.strict).toBe(true);
    expect(component.preserveWhitespace).toBe(false);
    expect(component.modules).toEqual('{\"toolbar\":true}');

    expect(component.quillEditor.options).toEqual({debug: 'warn', formats: undefined, modules: {toolbar: false}, readOnly: true, strict: true, theme: 'snow'});
  });

  it('renders pre tag if preserve whitespace', async () => {
    component.preserveWhitespace = true;

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <quill-view content="<p>Test</p>" modules="{&quot;toolbar&quot;:true}" styles="{&quot;height&quot;: &quot;200px&quot;}">
        <pre quill-element=""></pre>
      </quill-view>
    `);
  });

  it('renders styles changes', async () => {
    component.styles = '{\"height\": \"300px\"}';

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <quill-view content="<p>Test</p>" modules="{&quot;toolbar&quot;:true}" styles="{&quot;height&quot;: &quot;200px&quot;}">
        <div class="quill-view" quill-element="" style="height: 300px;">
          <div></div>
        </div>
      </quill-view>
    `);
  });

  describe('Formats', () => {
    describe('json', () => {
      it('renders json string', async () => {
        const spy = spyOn(component.quillEditor, 'setContents').and.callThrough();

        component.format = 'json';
        component.content = JSON.stringify([{
          insert: 'Hallo'
        }]);

        await page.waitForChanges();

        expect(spy).toHaveBeenCalledWith([{'insert': 'Hallo'}], 'api');
      });
    });

    describe('html', () => {
      it('renders html string', async () => {
        const spy = spyOn(component.quillEditor, 'setContents').and.callThrough();
        const clipboardSpy = spyOn(component.quillEditor.clipboard, 'convert').and.returnValue('<p>Hallo</p>');

        component.format = 'html';
        component.content = '<p>Hallo</p>';

        await page.waitForChanges();

        expect(clipboardSpy).toHaveBeenCalledWith('<p>Hallo</p>')
        expect(spy).toHaveBeenCalledWith('<p>Hallo</p>', 'api');
      });
    });

    describe('text', () => {
      it('renders plain text', async () => {
        const spy = spyOn(component.quillEditor, 'setText').and.callThrough();

        component.format = 'text';
        component.content = 'Hallo';

        await page.waitForChanges();

        expect(spy).toHaveBeenCalledWith('Hallo', 'api');
      });
    });
  });

  describe('#updateContent', () => {
    it('returns null if known format but no content change', () => {
      spyOn(component, 'getEditorContent').and.returnValue('');
      const setSpy = spyOn(component, 'setEditorContent');

      expect(component.updateContent('')).toBe(null);
      expect(setSpy).not.toHaveBeenCalled();
    });

    it('returns null if JSON.stringify of new value failes', () => {
      const setSpy = spyOn(component, 'setEditorContent');
      spyOn(JSON, 'stringify').and.throwError('FAIL!');

      expect(component.updateContent({test: 1})).toBe(null);
      expect(setSpy).not.toHaveBeenCalled();
    });

    it('returns null if JSON.stringify of new value is the same as the current', () => {
      const setSpy = spyOn(component, 'setEditorContent');
      spyOn(JSON, 'stringify').and.returnValue('');

      expect(component.updateContent('asdf')).toBe(null);
      expect(setSpy).not.toHaveBeenCalled();
    });

    it('calls setContent if everything is fine', () => {
      const setSpy = spyOn(component, 'setEditorContent');

      expect(component.updateContent('asdf')).toBe(undefined);
      expect(setSpy).toHaveBeenCalledWith('asdf');
    });
  });

  describe('#updateStyles', () => {
    it('does nothing if not editorElement', () => {
      const spy = spyOn(component.editorElement.style, 'setProperty');

      component.editorElement = null
      component.updateStyle('', '');
      expect(spy).not.toHaveBeenCalled();
    });

    it('removes old styles', () => {
      const spy = spyOn(component.editorElement.style, 'setProperty');

      component.updateStyle('', '{"height": "12px"}');
      expect(spy).toHaveBeenCalledWith('height', '');
    });

    it('adds new styles', () => {
      const spy = spyOn(component.editorElement.style, 'setProperty');

      component.updateStyle('{"height": "12px"}', '');
      expect(spy).toHaveBeenCalledWith('height', '12px');
    });
  });

  describe('#setEditorContent', () => {
    describe('format: html', () => {
      it('converts html and sets content', () => {
        spyOn(component.quillEditor.clipboard, 'convert').and.returnValue([{insert: '1'}]);
        const spy = spyOn(component.quillEditor, 'setContents');

        component.format = 'html';
        component.setEditorContent('');

        expect(spy).toHaveBeenCalledWith([{insert: '1'}], 'api');
      });
    });

    describe('format: text', () => {
      it('sets text', () => {
        const spy = spyOn(component.quillEditor, 'setText');

        component.format = 'text';
        component.setEditorContent('test');

        expect(spy).toHaveBeenCalledWith('test', 'api');
      });
    });

    describe('format: json', () => {
      it('sets json', () => {
        const spy = spyOn(component.quillEditor, 'setContents');

        component.format = 'json';
        component.setEditorContent('{"insert":"1"}');

        expect(spy).toHaveBeenCalledWith({insert: '1'}, 'api');
      });

      it('sets value as text, if json not parsable', () => {
        const spy = spyOn(component.quillEditor, 'setText');

        component.format = 'json';
        component.setEditorContent('{"insert":');

        expect(spy).toHaveBeenCalledWith('{"insert":', 'api');
      });
    });

    describe('unkown format', () => {
      it('sets text', () => {
        const spy = spyOn(component.quillEditor, 'setText');

        component.format = 'test' as any;
        component.setEditorContent('test');

        expect(spy).toHaveBeenCalledWith('test', 'api');
      });
    });
  });

  describe('#getEditorContent', () => {
    describe('format: html', () => {
      it('p with br or div with br returns empty string', () => {
        component.quillEditor.editorElement.children[0].innerHTML = '<div><br/></div>';
        component.format = 'html';

        expect(component.getEditorContent()).toEqual('');
      });

      it('returns html', () => {
        component.quillEditor.editorElement.children[0].innerHTML = '<div><p>asdf</p><br/></div>';
        component.format = 'html';

        expect(component.getEditorContent()).toEqual('<div><p>asdf</p><br></div>');
      });
    });

    describe('format: text', () => {
      it('returns text', () => {
        const spy = spyOn(component.quillEditor, 'getText').and.returnValue('test');

        component.format = 'text';

        expect(component.getEditorContent()).toEqual('test');
        expect(spy).toHaveBeenCalledWith();
      });
    });

    describe('format: json', () => {
      it('returns json', () => {
        const spy = spyOn(component.quillEditor, 'getContents').and.returnValue([{insert: '1'}]);

        component.format = 'json';

        expect(component.getEditorContent()).toEqual(JSON.stringify([{insert: '1'}]));
        expect(spy).toHaveBeenCalled();
      });

      it('returns value as text, if json not parsable', () => {
        const spy = spyOn(component.quillEditor, 'getText').and.returnValue('test');
        spyOn(JSON, 'stringify').and.throwError('FAIL!');

        component.format = 'json';

        expect(component.getEditorContent()).toEqual('test');
        expect(spy).toHaveBeenCalled();
      });
    });

    describe('unkown format', () => {
      it('returns text', () => {
        const spy = spyOn(component.quillEditor, 'getText').and.returnValue('test');

        component.format = 'test' as any;

        expect(component.getEditorContent()).toEqual('test');
        expect(spy).toHaveBeenCalled();
      });
    });
  });

  describe('#componentDidLoad', () => {
    describe('modules', () => {
      it('default modules - toolbar - false', () => {
        component.modules = undefined;
        component.componentDidLoad();

        expect(component.quillEditor.options.modules).toEqual({
          toolbar: false
        });
      });

      it('force toolbar false for custom modules', () => {
        component.modules = `{
          "toolbar": true,
          "test": {}
        }`;
        component.componentDidLoad();

        expect(component.quillEditor.options.modules).toEqual({
          test: {},
          toolbar: false
        });
      });
    });

    describe('theme', () => {
      it('defaults to "snow', () => {
        component.theme = undefined;
        component.componentDidLoad();

        expect(component.quillEditor.options.theme).toEqual('snow');
      });

      it('force toolbar false for custom modules', () => {
        component.modules = `{
          "toolbar": true,
          "test": {}
        }`;
        component.componentDidLoad();

        expect(component.quillEditor.options.modules).toEqual({
          test: {},
          toolbar: false
        });
      });
    });

    describe('without styles and content', () => {
      it('does nothing with styles', () => {
        component.styles = undefined;
        const spy = spyOn(component.editorElement.style, 'setProperty')

        component.componentDidLoad();

        expect(spy).not.toHaveBeenCalled();
      });

      it('does not set content if nothing there', () => {
        component.content = '';
        const spy = spyOn(component, 'setEditorContent')

        component.componentDidLoad();

        expect(spy).not.toHaveBeenCalled();
      });
    });
  });
});
