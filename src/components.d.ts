/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface QuillEditor {
        "bounds": HTMLElement | string;
        "content": string;
        "customToolbarPosition": 'top' | 'bottom';
        "debug": string;
        "format": 'html' | 'text' | 'json';
        "formats": string[];
        "modules"?: string;
        "placeholder": string;
        "preserveWhitespace": boolean;
        "readOnly": boolean;
        "scrollingContainer": HTMLElement | string;
        "strict": boolean;
        "styles": string;
        "theme": string;
    }
    interface QuillView {
        "content": string;
        "debug": string;
        "format": 'html' | 'text' | 'json';
        "formats": string[];
        "modules"?: string;
        "preserveWhitespace": boolean;
        "strict": boolean;
        "styles": string;
        "theme": string;
    }
    interface QuillViewHtml {
        "content": string;
        "theme": string;
    }
}
declare global {
    interface HTMLQuillEditorElement extends Components.QuillEditor, HTMLStencilElement {
    }
    var HTMLQuillEditorElement: {
        prototype: HTMLQuillEditorElement;
        new (): HTMLQuillEditorElement;
    };
    interface HTMLQuillViewElement extends Components.QuillView, HTMLStencilElement {
    }
    var HTMLQuillViewElement: {
        prototype: HTMLQuillViewElement;
        new (): HTMLQuillViewElement;
    };
    interface HTMLQuillViewHtmlElement extends Components.QuillViewHtml, HTMLStencilElement {
    }
    var HTMLQuillViewHtmlElement: {
        prototype: HTMLQuillViewHtmlElement;
        new (): HTMLQuillViewHtmlElement;
    };
    interface HTMLElementTagNameMap {
        "quill-editor": HTMLQuillEditorElement;
        "quill-view": HTMLQuillViewElement;
        "quill-view-html": HTMLQuillViewHtmlElement;
    }
}
declare namespace LocalJSX {
    interface QuillEditor {
        "bounds"?: HTMLElement | string;
        "content"?: string;
        "customToolbarPosition"?: 'top' | 'bottom';
        "debug"?: string;
        "format"?: 'html' | 'text' | 'json';
        "formats"?: string[];
        "modules"?: string;
        "onEditorBlur"?: (event: CustomEvent<{
    editor: any;
    source: string;
  }>) => void;
        "onEditorChange"?: (event: CustomEvent<| {
        editor: any;
        event: 'text-change';
        content: any;
        text: string;
        html: string;
        delta: any;
        oldDelta: any;
        source: string;
      }
    | {
        editor: any;
        event: 'selection-change';
        range: any;
        oldRange: any;
        source: string;
      }>) => void;
        "onEditorContentChange"?: (event: CustomEvent<{
    editor: any;
    content: any;
    text: string;
    html: string;
    delta: any;
    oldDelta: any;
    source: string;
  }>) => void;
        "onEditorFocus"?: (event: CustomEvent<{
    editor: any;
    source: string;
  }>) => void;
        "onEditorInit"?: (event: CustomEvent<any>) => void;
        "onEditorSelectionChange"?: (event: CustomEvent<{
    editor: any;
    range: any;
    oldRange: any;
    source: string;
  }>) => void;
        "placeholder"?: string;
        "preserveWhitespace"?: boolean;
        "readOnly"?: boolean;
        "scrollingContainer"?: HTMLElement | string;
        "strict"?: boolean;
        "styles"?: string;
        "theme"?: string;
    }
    interface QuillView {
        "content"?: string;
        "debug"?: string;
        "format"?: 'html' | 'text' | 'json';
        "formats"?: string[];
        "modules"?: string;
        "preserveWhitespace"?: boolean;
        "strict"?: boolean;
        "styles"?: string;
        "theme"?: string;
    }
    interface QuillViewHtml {
        "content"?: string;
        "theme"?: string;
    }
    interface IntrinsicElements {
        "quill-editor": QuillEditor;
        "quill-view": QuillView;
        "quill-view-html": QuillViewHtml;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "quill-editor": LocalJSX.QuillEditor & JSXBase.HTMLAttributes<HTMLQuillEditorElement>;
            "quill-view": LocalJSX.QuillView & JSXBase.HTMLAttributes<HTMLQuillViewElement>;
            "quill-view-html": LocalJSX.QuillViewHtml & JSXBase.HTMLAttributes<HTMLQuillViewHtmlElement>;
        }
    }
}
