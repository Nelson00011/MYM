import { useRouteError } from 'react-router-dom';

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
        <div title={title}>
            <p>{message}</p>
        </div>
    </div>)
} 

export default NotFoundPage;