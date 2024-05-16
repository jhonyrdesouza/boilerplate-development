import { useLocale, useTranslations } from 'next-intl';
import { SelectContent, SelectItem } from 'ui/components/ui/select';
import LocaleSwitcherSelect from './locale-switcher-select';

const flags = { en: 'fi fi-us', br: 'fi fi-br' };

export default function LocaleSwitcher() {
  const t = useTranslations('localeSwitcher');
  const locale = useLocale();

  return (
    <div>
      <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
        <SelectContent>
          {Object.entries(flags).map(([code, flags]) => (
            <SelectItem key={code} value={code}>
              <span className={flags}></span> {t('locale', { locale: code })}
            </SelectItem>
          ))}
        </SelectContent>
      </LocaleSwitcherSelect>
    </div>
  );
}
