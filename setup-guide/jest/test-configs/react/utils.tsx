import {RenderResult, render as rtlRender, RenderOptions} from '@testing-library/react';
import {ComponentType, PropsWithChildren, ReactElement} from 'react';

/**
 * Custom render method to includes things like global context providers, data stores, etc.
 * @see {@link https://testing-library.com/docs/react-testing-library/setup#custom-render} for more info.
 *
 * @param ui - Component to render.
 * @param renderOptions - Render options.
 *
 * @return {RenderResult}
 */
const render = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult => {
  const Wrapper = (props: PropsWithChildren<ComponentType>): ReactElement => {
    const {children} = props;

    return <Providers>{children}</Providers>;
  };

  return rtlRender(ui, {wrapper: Wrapper as any, ...options});
};

// re-export everything
export * from '@testing-library/react';
// override render method
export {render};
