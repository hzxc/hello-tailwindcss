import { useMemo, useState } from 'react';

export const useToggle = (defaultVisible: boolean = false) => {
  const [visible, setVisible] = useState(defaultVisible);

  const { show, hide, toggle } = useMemo(() => {
    return {
      show: () => setVisible(true),
      hide: () => setVisible(false),
      toggle: () => setVisible((v) => !v),
    };
  }, []);

  return [visible, show, hide, toggle] as const;
};
