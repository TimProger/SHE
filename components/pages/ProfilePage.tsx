import Layout from "../../layout/layout";
import s from '../../styles/pages/profile.module.scss'
import {useRouter} from "next/router";
import React, {ChangeEvent, useEffect, useState} from "react";
import Container from "../../components/Container";
import Head from "next/head";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Storage} from "../../utils/storage";
import {$api, API_BASE_URL} from "../../http/api";
import {exit} from "../../store/Slices/Profile.slice";
import Button from "../Button";
import ProfileImg from '../../public/images/profile_mock.png'

interface IProfilePageProps {
  translates: any;
}

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const Product: React.FC<IProfilePageProps> = ({translates}) => {
  const { locale } = useRouter()
  const dispatch = useAppDispatch()

  const { isAuth, isLoading, user } = useTypedSelector(state => state.profile)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneUpd, setPhoneUpd] = useState('')
  const [digits, setDigits] = useState('')
  const [email, setEmail] = useState('')
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({
    first: null,
    last: null,
    phone: null,
    email: null,
  })

  useEffect(()=>{
    if(typeof window !== undefined){
      if(!Storage.get('accessToken')){
        window.location.replace('/')
      }else{
        if(user){
          setFirstName(user.first_name)
          setLastName(user.last_name)
          setEmail(user.email)
          let phoneLen = user.phone.toString().length
          let digits = user.phone.toString().substring(0, phoneLen-10)
          let number = user.phone.toString().substring(phoneLen-10, 11)

          let formattedPhone: string = `+${digits}`
          formattedPhone += ' ' + number.substring(0, 3);
          formattedPhone += ' ' + number.substring(3, 6);
          formattedPhone += ' ' + number.substring(6, 8);
          formattedPhone += ' ' + number.substring(8, 10);

          setPhoneUpd(formattedPhone);
          setDigits(digits)
        }
      }
    }
  },[user])

  const changeFile = (e: ChangeEvent) => {
    const data = new FormData()
    const target = e.target as HTMLInputElement;
    const files = target.files as FileList;

    // @ts-ignore
    setSelectedFile(files[0])

    if(files[0]){
      data.append('user_image', files[0]);
    }
    $api.patch('/profile/', data)
      .then(()=>{
        setIsSuccess(true)
      })
  }

  const onChangeFirst = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value)
    setIsSuccess(false)
  }

  const onChangeLast = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
    setIsSuccess(false)
  }

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    let phoneVal = e.target.value.replace(/\D/g, ""),
      formattedPhone = `+${digits}`

    if(!phoneVal){
      setPhoneUpd('');
    }

    const phoneLen = digits.length

    if (phoneVal.length > phoneLen) {
      formattedPhone += ' ' + phoneVal.substring(phoneLen, phoneLen+3);
    }

    if (phoneVal.length >= phoneLen+4) {
      formattedPhone += ' ' + phoneVal.substring(phoneLen+3, phoneLen+6);
    }

    if (phoneVal.length >= phoneLen+7) {
      formattedPhone += ' ' + phoneVal.substring(phoneLen+6, phoneLen+8);
    }

    if (phoneVal.length >= phoneLen+9) {
      formattedPhone += ' ' + phoneVal.substring(phoneLen+8, phoneLen+10);
    }

    setPhoneUpd(formattedPhone);
    if(formattedPhone.length === phoneLen+15){
      setErrors(prev => Object.assign(prev, {phone: null}))
    }else{
      setErrors(prev => Object.assign(prev, {phone: 'Телефон слишком короткий'}))
    }
    setIsSuccess(false)
  }

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if(!validEmailRegex.test(e.target.value)){
      setErrors(prev => Object.assign(prev, {email: 'Почта введена некорректно.'}))
    }else{
      setErrors(prev => Object.assign(prev, {email: null}))
    }
    setIsSuccess(false)
  }

  const onSubmitSave = () => {
    const data = new FormData()

    if(!errors.email && email.length > 0){
      data.append('email', email);
    }
    if(!errors.phone && phoneUpd.length > 0){
      data.append('phone', phoneUpd.replace(/\s/g, '').replace(/\+/, ''));
    }
    if(!errors.first && firstName.length > 0){
      data.append('first_name', firstName);
    }
    if(!errors.last && lastName.length > 0){
      data.append('last_name', lastName);
    }

    $api.patch('/profile/', data)
      .then(()=>{
        setIsSuccess(true)
      })
  }

  const exitHandler = () => {
    dispatch(exit())
    Storage.delete('accessToken')
    Storage.delete('refreshToken')
    window.location.replace('/')
  }

  const kill = () => {
    $api.delete('/profile/')
      .then(()=>{
        dispatch(exit())
        Storage.delete('accessToken')
        Storage.delete('refreshToken')
        window.location.replace('/')
      })
  }

  const [page, setPage] = useState<number>(1)

  const displayPage = () => {
    switch (page){
      case 1:
        return (
          <div className={s.profile__pages__page__info}>
            <div className={s.profile__pages__page__info__container}>
              <div className={s.profile__pages__page__info__inputs}>
                <div>
                  <h3>{translates.pages.info.inputs.first}</h3>
                  <input value={firstName} onChange={onChangeFirst} placeholder={translates.pages.info.inputs.first_pl} type="text"/>
                </div>
                <div>
                  <h3>{translates.pages.info.inputs.last}</h3>
                  <input value={lastName} onChange={onChangeLast} placeholder={translates.pages.info.inputs.last_pl} type="text"/>
                </div>
                <div>
                  <h3>{translates.pages.info.inputs.phone}</h3>
                  <input value={phoneUpd} onChange={onChangePhone} placeholder={'+7 999 999 99 99'} type="text"/>
                </div>
                <div>
                  <h3>Email</h3>
                  <input value={email} onChange={onChangeEmail} placeholder={'info@tmshe.ru'} type="text"/>
                </div>
              </div>
              <div className={s.profile__pages__page__info__why}>
                <h3>{translates.pages.info.why_title}</h3>
                <p>{translates.pages.info.why_parag}</p>
              </div>
            </div>
            {isSuccess ? <Button success={isSuccess} text={translates.pages.info.save__success} />
              : <Button onClick={onSubmitSave} text={translates.pages.info.save}/>}
          </div>
        )
      case 2:
        return (
          <div className={s.profile__pages__page__products}>
            <h2>{translates.pages.orders.notfound}</h2>
            <Button href={'/catalogue'} type={'link'} text={translates.pages.orders.toCatalogue} />
          </div>
        )
      case 3:
        return (
          <div className={s.profile__pages__page__settings}>
            <div>
              <h3 onClick={()=>kill()}>{translates.pages.settings.delete}</h3>
              <p>{translates.pages.settings.aboutDelete}</p>
            </div>
          </div>
        )
    }
  }

  return (
    <Layout btns={translates.header} links={translates.footer.links} titles={translates.footer.titles} auth={translates.auth}>
      <Head>
        <title>{translates.title} | ™SHE</title>
      </Head>
      <div>
        <Container>
          <div className={s.profile}>
            <div className={s.profile__info}>
              <div className={s.profile__info__header}>
                <h1>{translates.title}</h1>
                <p onClick={exitHandler}>{translates.exit}</p>
              </div>
              <div className={s.profile__info__info}>
                <div>
                  <label title="&nbsp;" className='profileImgInputLabel' htmlFor="profileImgInput">
                    <img src={user?.user_image ? (selectedFile ? URL.createObjectURL(selectedFile) : `${API_BASE_URL}${user?.user_image}`) : ProfileImg.src} alt="user_image"/>
                    <input title="&nbsp;" accept="image/*" id='profileImgInput' className='profileImgInput' type='file' onChange={changeFile} />
                  </label>
                </div>
                <div>
                  <h2>{user?.first_name || translates.pages.info.inputs.first} {user?.last_name || translates.pages.info.inputs.last}</h2>
                  <p>{translates.stalus}</p>
                </div>
              </div>
            </div>
            <div className={s.profile__pages}>
              <div className={s.profile__pages__navbar}>
                <div className={s.profile__pages__navbar__wrapper}>
                  <p style={{borderBottom : page == 1 ? '1px solid black' : 'none'}} onClick={()=> setPage(1)}>{translates.btns.info}</p>
                  <p style={{borderBottom : page == 2 ? '1px solid black' : 'none'}} onClick={()=> setPage(2)}>{translates.btns.orders}</p>
                  <p style={{borderBottom : page == 3 ? '1px solid black' : 'none'}} onClick={()=> setPage(3)}>{translates.btns.settings}</p>
                </div>
              </div>
              <div className={s.profile__pages__page}>
                {displayPage()}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default Product