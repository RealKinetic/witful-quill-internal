/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import '@stencil/core';




export namespace Components {

  interface QuillComponent {
    'first': string;
    'last': string;
  }
  interface QuillComponentAttributes extends StencilHTMLAttributes {
    'first'?: string;
    'last'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'QuillComponent': Components.QuillComponent;
  }

  interface StencilIntrinsicElements {
    'quill-component': Components.QuillComponentAttributes;
  }


  interface HTMLQuillComponentElement extends Components.QuillComponent, HTMLStencilElement {}
  var HTMLQuillComponentElement: {
    prototype: HTMLQuillComponentElement;
    new (): HTMLQuillComponentElement;
  };

  interface HTMLElementTagNameMap {
    'quill-component': HTMLQuillComponentElement
  }

  interface ElementTagNameMap {
    'quill-component': HTMLQuillComponentElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}