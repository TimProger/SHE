import {NextRouter} from "next/router";
import React from "react";

export const onToggleLanguageClick = (e: React.ChangeEvent<HTMLSelectElement>, router: NextRouter) => {
  const { pathname, asPath, query } = router
  router.push({ pathname, query }, asPath, { locale: e.target.value })
}