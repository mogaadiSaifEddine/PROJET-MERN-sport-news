import React,{useState} from 'react'

import List from '../article/articlevisiteurs/List';
import NavBar from '../NavBar/navBar';

const Article = () => {
  const [searchbytitle,setSearchbytitle]=useState("")

  return (
    <div>
      <NavBar setSearchbytitle={setSearchbytitle}/>
      <List searchbytitle={searchbytitle}/>
    </div>
  );
};

export default Article;