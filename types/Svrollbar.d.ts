/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SvrollbarProps {
  viewport?: HTMLElement;

  contents?: HTMLElement;

  /**
   * @default 1000
   */
  hideAfter?: number;

  /**
   * @default (node) => fade(node, { duration: 100 })
   */
  vTrackIn?: (node: HTMLElement, params: any) => svelte.TransitionConfig;

  /**
   * @default (node) => fade(node, { duration: 300 })
   */
  vTrackOut?: (node: HTMLElement, params: any) => svelte.TransitionConfig;

  /**
   * @default (node) => fade(node, { duration: 100 })
   */
  vThumbIn?: (node: HTMLElement, params: any) => svelte.TransitionConfig;

  /**
   * @default (node) => fade(node, { duration: 300 })
   */
  vThumbOut?: (node: HTMLElement, params: any) => svelte.TransitionConfig;
}

export default class Svrollbar extends SvelteComponentTyped<
  SvrollbarProps,
  { show: CustomEvent<any>; hide: CustomEvent<any> },
  {}
> {}
