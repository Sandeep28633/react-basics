import {useState,useEffect} from 'react';
import Youtube from '../Components/Api/Youtube';

const useVideos=(defaultSearchterm)=>{
    const [videoData, setVideos] = useState([]);
    useEffect(() => {
        search(defaultSearchterm);
      }, []);
    
      const search = async (term) => {
        const searchData = await Youtube.get(`/search?q=${term}/`);
        setVideos(searchData.data.items);
      };
      return [videoData,search]
}

export default useVideos;