import React from 'react';

import { LuFileSearch } from 'react-icons/lu';
import { PiGraph } from 'react-icons/pi';
import { CiCalendar, CiVault, CiCircleQuestion } from 'react-icons/ci';

import ToolTip from './ToolTip';

export default function SideBar() {
  return (
    <div className='flex h-screen w-10 flex-col items-center justify-between bg-[var(--color-dark-one)]'>
      <ul>
        <li>
          <ToolTip position='right' content='Search Notes'>
            <LuFileSearch className='my-3 h-5 w-5 text-[var(--color-txt-dull)]' />
          </ToolTip>
        </li>
        <li>
          <ToolTip position='right' content='Graph View'>
            <PiGraph className='my-3 h-5 w-5 text-[var(--color-txt-dull)]' />
          </ToolTip>
        </li>
        <li>
          <ToolTip position='right' content='Daily Notes'>
            <CiCalendar className='my-3 h-5 w-5 text-[var(--color-txt-dull)]' />
          </ToolTip>
        </li>
      </ul>
      <ul>
        <li>
          <ToolTip position='right' content='Open New Vault'>
            <CiVault className='my-3 h-5 w-5 text-[var(--color-txt-dull)]' />
          </ToolTip>
        </li>
        <li>
          <ToolTip position='right' content='About'>
            <CiCircleQuestion className='my-3 h-5 w-5 text-[var(--color-txt-dull)]' />
          </ToolTip>
        </li>
      </ul>
    </div>
  );
}
