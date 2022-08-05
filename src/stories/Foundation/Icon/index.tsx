import React, { useMemo, Suspense } from 'react';
import { getHexColor, Colors } from '../../../shared/colors';

export interface IconProps {
  className?: string;
  color?: Colors;
  name: string;
  /**
   * Defaults to havre.
   * Reason: This was the original pack used for the icon component.
   */
  pack?: 'granola' | 'havre' | 'havre18px';
}

/**
 * Icon component
 */
export const Icon = ({
  className,
  color = 'black',
  name,
  pack = 'havre',
}: IconProps) => {
  /**
   * Dynamically load the icon from the correct pack
   */
  const LazyIcon = useMemo(
    () =>
      React.lazy(() =>
        import(`node_modules/@huddly/frokost/dist/${pack}/index.js`)
          .then((module) => {
            if (!module[name]) {
              throw new Error(`Icon "${name}" not found in pack "${pack}"`);
            }
            return { default: module[name] };
          })
          .catch(() => {
            throw new Error(`Icon pack "${pack}" not found`);
          })
      ),
    [name, pack]
  );

  return (
    <Suspense fallback={null}>
      <LazyIcon className={className} color={getHexColor(color)} />
    </Suspense>
  );
};
