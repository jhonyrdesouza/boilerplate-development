'use client';

import { usePathname, useRouter } from '@/plugins/i18n/navigation';
import { ReactNode, useTransition } from 'react';
import { Select, SelectTrigger, SelectValue } from 'ui/components/ui/select';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({ children, defaultValue, label }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(value: string) {
    const nextLocale = value;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      {children}
    </Select>
  );
}
