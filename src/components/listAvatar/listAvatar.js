import React, {useEffect, useState} from "react"
import "./listAvatar.scss"
import CardAvatar from "../cardAvatar/cardAvatar"
import axios from 'axios';
import { Link, animateScroll as scroll } from "react-scroll";
import InfoAvatar from "../Info/infoAvatar";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "react-spinkit";
import Pagination from "../pagination/pagination"

let page = 1;
let pageSize = 20;

const ListAvatar = () => {
    
  const [cardList, setcardList] = useState([]);
  const [show, setShow] = useState(false);
  const [avatarItem, setAvatarItem] = useState();
  const [checked, setChecked] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const handleClick = () => {
    setChecked(!checked);
    setHasMore(!hasMore);
    scrollToTop();
}

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

    useEffect(() => {
        if (cardList.length === 0) {
          getData();
          page++;
        }
      });
        
     const getData = async () => {
       const apiURL = `https://rickandmortyapi.com/api/character/?page=${page}`;
       

       // fake asynchronous api call to demonstrate loader operation
      setTimeout(() => {
          axios
            .get(apiURL)
            .then(data => {
              setcardList([...cardList, ...data.data.results]);
              page++;
            }   
          );
      }, 3000);
      }
  
  const clickInfo = (card) => {
    if (show === false)
    {
      setShow(true);
      setAvatarItem(card);
    
    }
  }

  const getCurrentPage = (curPage) => {
    setCurrentPage(curPage);
  }

  const paginate = () => {
    const startIndex = (currentPage - 1) * pageSize;
    return [...cardList].splice(startIndex, pageSize);
  }
  const paginateList = paginate();


  return (
    <>
       { checked === true ? 
        <Pagination avatarList={cardList} getCurrentPage={getCurrentPage} />
        : ""
      }

    <InfiniteScroll
      dataLength={cardList.length}
        next={() => {
          getData();
      }}
      hasMore={hasMore}
      scrollThreshold={1}
        loader={ checked === false ?
          <Spinner name="cube-grid" style={{ width: 50, height: 50, margin: "0px auto" }}
          />
          : ""
      }
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You've seen everything you wanted to</b>
        </p>
      }
    
    >
      <div className="container" id="container">
          { checked === false ?
            
              cardList.map((item) => (
              <CardAvatar key={item.id} card={item} clickInfo={clickInfo} />   
              ))
            :
            paginateList.map((item) => (
              <CardAvatar key={item.id} card={item} clickInfo={clickInfo} />   
              ))
            
          }
        
        <Link
            to="container"
            spy={true}
            smooth={true}
            offset={-100}
            duration={2000}
        >
            <button className="btn-to-top" onClick={scrollToTop}>to top</button>
        </Link>
        
          <input type="checkbox" id="switch"
            onChange={handleClick} checked={checked} />
          <label htmlFor="switch">Toggle</label>

        <InfoAvatar 
          onClose={() => setShow(false) }
          show={show}
          avatarItem={avatarItem}
        />

      </div>
      </InfiniteScroll>
      </>
    )
}

export default ListAvatar;