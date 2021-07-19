import axios from "axios";
import { IUser } from "../types/user";
// you don't need anything else to import

interface Props {
  // TODO: add user type
    user:IUser[];
}


export default function AxiosTest(props: Props) {
  // TODO: once you get data map through data and show them name
  
   axios.get('/api/users').then(item =>{
    // props.user=item.data;
    console.log(item.data)
  })
  
  return(<div>data in console</div>) ;
}

// TODO: fetch data with axios to use in app
// RestApi: axios.get("/api/users") => [{name: "amir"}]
// NOTE: data fetching should happen in server side
// Resource: https://nextjs.org/docs/basic-features/data-fetching
// Resource: https://github.com/axios/axios
