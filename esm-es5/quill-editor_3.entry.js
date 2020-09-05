import{r as registerInstance,c as createEvent,h,H as Host,g as getElement}from"./index-ac3691aa.js";var QuillEditorComponent=function(){function t(t){registerInstance(this,t);this.editorInit=createEvent(this,"editorInit",7);this.editorChange=createEvent(this,"editorChange",7);this.editorContentChange=createEvent(this,"editorContentChange",7);this.editorSelectionChange=createEvent(this,"editorSelectionChange",7);this.editorFocus=createEvent(this,"editorFocus",7);this.editorBlur=createEvent(this,"editorBlur",7);this.format="html";this.debug="warn";this.placeholder="Insert text here ...";this.strict=true;this.styles="{}";this.theme="snow";this.customToolbarPosition="top";this.preserveWhitespace=false;this.defaultModules={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",false,"large","huge"]}],[{header:[1,2,3,4,5,6,false]}],[{color:[].slice()},{background:[].slice()}],[{font:[].slice()}],[{align:[].slice()}],["clean"],["link","image","video"]]}}t.prototype.setEditorContent=function(t){if(this.format==="html"){var e=this.quillEditor.clipboard.convert(t);this.quillEditor.setContents(e,"api")}else if(this.format==="text"){this.quillEditor.setText(t,"api")}else if(this.format==="json"){try{this.quillEditor.setContents(JSON.parse(t),"api")}catch(i){this.quillEditor.setText(t,"api")}}else{this.quillEditor.setText(t,"api")}};t.prototype.getEditorContent=function(){var t=this.quillEditor.getText();var e=this.quillEditor.getContents();var i=this.editorElement.children[0].innerHTML;if(i==="<p><br></p>"||i==="<div><br></div>"){i=""}if(this.format==="html"){return i}else if(this.format==="text"){return t}else if(this.format==="json"){try{return JSON.stringify(e)}catch(r){return t}}else{return t}};t.prototype.componentDidLoad=function(){var t=this;this.editorElement=this.preserveWhitespace?document.createElement("pre"):document.createElement("div");this.editorElement.setAttribute("quill-editor","");var e=this.modules?JSON.parse(this.modules):this.defaultModules;var i=this.wrapperElement.querySelector('[slot="quill-toolbar"]');if(i){e["toolbar"]=i;if(this.customToolbarPosition==="bottom"){this.wrapperElement.prepend(this.editorElement)}else{this.wrapperElement.append(this.editorElement)}}else{this.wrapperElement.append(this.editorElement)}this.quillEditor=new Quill(this.editorElement,{debug:this.debug,modules:e,placeholder:this.placeholder,readOnly:this.readOnly||false,theme:this.theme||"snow",formats:this.formats,bounds:this.bounds?this.bounds==="self"?this.editorElement:this.bounds:document.body,strict:this.strict,scrollingContainer:this.scrollingContainer});if(this.styles){var r=JSON.parse(this.styles);Object.keys(r).forEach((function(e){t.editorElement.style.setProperty(e,r[e])}))}if(this.content){this.setEditorContent(this.content);this.quillEditor["history"].clear()}this.editorChangeEvent=this.quillEditor.on("editor-change",(function(e,i,r,n){if(e==="text-change"){var o=t.quillEditor.getText();var s=t.quillEditor.getContents();var l=t.editorElement.querySelector(".ql-editor").innerHTML;if(l==="<p><br></p>"||l==="<div><br></div>"){l=null}t.editorChange.emit({content:s,delta:i,editor:t.quillEditor,event:e,html:l,oldDelta:r,source:n,text:o})}else{t.editorChange.emit({editor:t.quillEditor,event:e,oldRange:r,range:i,source:n})}}));this.selectionChangeEvent=this.quillEditor.on("selection-change",(function(e,i,r){if(e===null){t.editorBlur.emit({editor:t.quillEditor,source:r})}else if(i===null){t.editorFocus.emit({editor:t.quillEditor,source:r})}t.editorSelectionChange.emit({editor:t.quillEditor,range:e,oldRange:i,source:r})}));this.textChangeEvent=this.quillEditor.on("text-change",(function(e,i,r){var n=t.quillEditor.getText();var o=t.quillEditor.getContents();var s=t.editorElement.querySelector(".ql-editor").innerHTML;if(s==="<p><br></p>"||s==="<div><br></div>"){s=null}t.editorContentChange.emit({editor:t.quillEditor,content:o,delta:e,html:s,oldDelta:i,source:r,text:n})}));setTimeout((function(){t.editorInit.emit(t.quillEditor)}))};t.prototype.disconnectedCallback=function(){if(this.selectionChangeEvent){this.selectionChangeEvent.removeListener("selection-change")}if(this.textChangeEvent){this.textChangeEvent.removeListener("text-change")}if(this.editorChangeEvent){this.editorChangeEvent.removeListener("editor-change")}};t.prototype.updateContent=function(t){if(!this.quillEditor){return}var e=this.getEditorContent();if(["text","html","json"].indexOf(this.format)>-1&&t===e){return null}else{var i=false;try{var r=JSON.stringify(t);i=JSON.stringify(e)!==r}catch(n){return null}if(!i){return null}}this.setEditorContent(t)};t.prototype.updateReadOnly=function(t,e){if(!this.quillEditor){return}if(t!==e){this.quillEditor.enable(!t)}};t.prototype.updatePlaceholder=function(t,e){if(!this.quillEditor){return}if(t!==e){this.quillEditor.root.dataset.placeholder=t}};t.prototype.updateStyle=function(t,e){var i=this;if(!this.editorElement){return}if(e){var r=JSON.parse(e);Object.keys(r).forEach((function(t){i.editorElement.style.setProperty(t,"")}))}if(t){var n=JSON.parse(t);Object.keys(n).forEach((function(t){i.editorElement.style.setProperty(t,n[t])}))}};t.prototype.render=function(){h(Host,null,h("slot",{name:"quill-toolbar","quill-toolbar":""}))};Object.defineProperty(t.prototype,"wrapperElement",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{content:["updateContent"],readOnly:["updateReadOnly"],placeholder:["updatePlaceholder"],styles:["updateStyle"]}},enumerable:false,configurable:true});return t}();var quillViewCss=".ql-container.quill-view.sc-quill-view{border:0}";var QuillViewComponent=function(){function t(t){registerInstance(this,t);this.format="html";this.debug="warn";this.strict=true;this.styles="{}";this.theme="snow";this.preserveWhitespace=false}t.prototype.setEditorContent=function(t){if(this.format==="html"){var e=this.quillEditor.clipboard.convert(t);this.quillEditor.setContents(e,"api")}else if(this.format==="text"){this.quillEditor.setText(t,"api")}else if(this.format==="json"){try{this.quillEditor.setContents(JSON.parse(t),"api")}catch(i){this.quillEditor.setText(t,"api")}}else{this.quillEditor.setText(t,"api")}};t.prototype.getEditorContent=function(){var t=this.quillEditor.getText();var e=this.quillEditor.getContents();var i=this.editorElement.children[0].innerHTML;if(i==="<p><br></p>"||i==="<div><br></div>"){i=""}if(this.format==="html"){return i}else if(this.format==="text"){return t}else if(this.format==="json"){try{return JSON.stringify(e)}catch(r){return t}}else{return t}};t.prototype.componentDidLoad=function(){var t=this;var e=this.modules?JSON.parse(this.modules):{toolbar:false};if(e.toolbar){e.toolbar=false}this.quillEditor=new Quill(this.editorElement,{debug:this.debug,modules:e,readOnly:true,theme:this.theme||"snow",formats:this.formats,strict:this.strict});if(this.styles){var i=JSON.parse(this.styles);Object.keys(i).forEach((function(e){t.editorElement.style.setProperty(e,i[e])}))}this.editorElement.classList.add("quill-view");if(this.content){this.setEditorContent(this.content);this.quillEditor["history"].clear()}};t.prototype.updateStyle=function(t,e){var i=this;if(!this.editorElement){return}if(e){var r=JSON.parse(e);Object.keys(r).forEach((function(t){i.editorElement.style.setProperty(t,"")}))}if(t){var n=JSON.parse(t);Object.keys(n).forEach((function(t){i.editorElement.style.setProperty(t,n[t])}))}};t.prototype.updateContent=function(t){var e=this.getEditorContent();if(["text","html","json"].indexOf(this.format)>-1&&t===e){return null}else{var i=false;try{var r=JSON.stringify(t);i=JSON.stringify(e)!==r}catch(n){return null}if(!i){return null}}this.setEditorContent(t)};t.prototype.render=function(){var t=this;return this.preserveWhitespace?h("pre",{"quill-element":true,ref:function(e){return t.editorElement=e}}):h("div",{"quill-element":true,ref:function(e){return t.editorElement=e}})};Object.defineProperty(t.prototype,"wrapperElement",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{styles:["updateStyle"],content:["updateContent"]}},enumerable:false,configurable:true});return t}();QuillViewComponent.style=quillViewCss;var quillViewHtmlCss=".ql-container.quill-view-html.sc-quill-view-html{border:0}";var QuillViewHTMLComponent=function(){function t(t){registerInstance(this,t);this.theme="snow";this.themeClass="ql-snow"}t.prototype.updateTheme=function(t){this.themeClass="ql-"+(t||"snow")};t.prototype.render=function(){var t="ql-container "+this.themeClass+" quill-view-html";return h("div",{class:t},h("div",{class:"ql-editor",innerHTML:this.content}))};Object.defineProperty(t,"watchers",{get:function(){return{theme:["updateTheme"]}},enumerable:false,configurable:true});return t}();QuillViewHTMLComponent.style=quillViewHtmlCss;export{QuillEditorComponent as quill_editor,QuillViewComponent as quill_view,QuillViewHTMLComponent as quill_view_html};