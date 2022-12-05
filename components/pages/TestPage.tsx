import {useRouter} from "next/router";
import React, { useState } from "react";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import {useTranslation} from "next-i18next";

interface IProductPageProps {
}

const TestPage: React.FC<IProductPageProps> = () => {
  const { locale } = useRouter()
  const dispatch = useAppDispatch()

  const { t } = useTranslation('common')

  return (
    <>
        <div>
          {t('title')}
          {t('services.website_development')}
        </div>
    </>
  )
}

export default TestPage