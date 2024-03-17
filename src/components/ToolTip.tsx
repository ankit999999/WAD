import React, { ReactNode } from 'react';

type ToolTipProps = {
  position: 'top' | 'bottom' | 'left' | 'right';
  content: string;
  children: ReactNode;
};

export default function ToolTip({ position, content, children }: ToolTipProps) {
  return (
    <div className='group relative cursor-pointer'>
      <div className='mx-2 my-1'>{children}</div>
      <span
        className={
          'absolute hidden whitespace-nowrap rounded bg-neutral-900 p-2 text-xs text-white group-hover:inline-block ' +
          (position === 'top'
            ? 'bottom-[calc(100%+5px)] left-1/2 -translate-x-1/2'
            : '') +
          (position === 'bottom'
            ? 'left-1/2 top-[calc(100%+5px)] -translate-x-1/2'
            : '') +
          (position === 'left'
            ? 'right-[calc(100%+5px)] top-1/2 -translate-y-1/2'
            : '') +
          (position === 'right'
            ? 'left-[calc(100%+5px)] top-1/2 -translate-y-1/2'
            : '')
        }
      >
        {content}
      </span>
      <span
        className={
          'absolute hidden border-[6px] group-hover:inline-block ' +
          (position === 'top'
            ? 'bottom-full left-1/2 -translate-x-1/2 border-b-0 border-l-transparent border-r-transparent border-t-neutral-900'
            : '') +
          (position === 'bottom'
            ? 'left-1/2 top-full -translate-x-1/2 border-t-0 border-b-neutral-900 border-l-transparent border-r-transparent'
            : '') +
          (position === 'left'
            ? 'right-full top-1/2 -translate-y-1/2 border-r-0 border-b-transparent border-l-neutral-900 border-t-transparent'
            : '') +
          (position === 'right'
            ? 'left-full top-1/2 -translate-y-1/2 border-l-0 border-b-transparent border-r-neutral-900 border-t-transparent'
            : '')
        }
      ></span>
    </div>
  );
}
