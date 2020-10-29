import axios from 'axios'


export const fetchShow = async () => {
    try{
   const res =  axios
        .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")

            return res
    } 
        catch(err){

            return err
    }

   
  };