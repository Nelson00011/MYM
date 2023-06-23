import { useRouteError } from 'react-router-dom';

import PageContent from '../components/PageContent';
import NavBar from '../components/Navbar';

function NotFoundPage(){
const error = useRouteError();
let title = "An error occured";
let message = 'Something went wrong!';

if(error.status === 500){
    message = JSON.parse(error.data).message;

}

if(error.status === 404){
    title = "Not found!";
    message = 'Count not find resource or page.';
}

    return (
    <div>
        <NavBar />
        <PageContent title={title}>
            <p>{message}</p>
        </PageContent>
    </div>)
} 

export default NotFoundPage;