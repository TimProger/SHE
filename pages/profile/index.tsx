import Head from 'next/head'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {LogIn} from "../../store/Slices/Auth.slice";
import {useDispatch} from "react-redux";
import Header from "../../components/Header";
import Layout from "../../layout/layout";

export default function Profile() {

    const { isAuth } = useTypedSelector(state => state.auth)
    const dispatch = useDispatch();

    const addNewUser = () => {
        console.log(isAuth)
        dispatch(LogIn(!isAuth));
    };

    return (
        <Layout title={'Профиль'}>
            <div>
                <button onClick={()=>addNewUser()}>dawdw</button>
                <h1>{isAuth ? 'YOOOO' : 'Hello'}</h1>
            </div>
        </Layout>
    )
}
