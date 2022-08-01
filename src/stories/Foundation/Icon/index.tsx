import React, { Suspense } from 'react';
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
  const DynamicIcon = React.lazy(() =>
    // Don't try to simplify this path, webpack will not like it
    import(`node_modules/@huddly/frokost/dist/${pack}`)
      .then((module) => {
        if (!module[name]) {
          throw new Error(`Icon "${name}" not found in pack "${pack}"`);
        }
        return { default: module[name] };
      })
      .catch(() => {
        throw new Error(`Icon pack "${pack}" not found`);
      })
  );

  return (
    <Suspense fallback={null}>
      <DynamicIcon className={className} color={getHexColor(color)} />
    </Suspense>
  );
};
