import {NextRouter} from "next/router";
import React, {MouseEvent} from "react";

export const onToggleLanguageClick = (e: MouseEvent, router: NextRouter, value: string) => {
  const { pathname, asPath, query } = router
  router.push({ pathname, query }, asPath, { locale: value })
}