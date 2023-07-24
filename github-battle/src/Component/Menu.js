// import React from "react";
// import Loader from "./Loader";
// class Main extends React.Component {
//   render() {
//     // if (!this.props.data) {
//     //   return <Loader />;
//     // }
//     let listArr = ["All", "JavaScript", "Ruby", "Python", "CSS"];
//     return (
//       <>
//         <ul className="searchList">
//           {listArr.map((elm) => {
//             return (
//               <>
//                 <button
//                   className={(isActive) =>
//                     "active" + (!isActive ? " non-active" : "")
//                   }
//                 >
//                   {elm}
//                 </button>
//               </>
//             );
//           })}
//         </ul>
//       </>
//     );
//   }
// }
// export default Main;

import { NavLink } from "react-router-dom";
import React from "react";
import Loader from "./Loader";

class Menu extends React.Component{
    render(){
        if (!this.props.data){
            return <Loader />
        }
        let data = this.props.data.items;

        let allLanguages = data.reduce((acc, items)=>{
            acc = acc.concat(items.language);
            return acc;
        },[])

        let language = [...new Set(allLanguages)];
        return(
            <ul className="flex justify-center">
               {language.map((language) =>
          language === null ? (
            <li className="menu" key={language}>
              <NavLink
                className={(isActive) =>
                  "active" + (!isActive ? " non-active" : "")
                }
                to="/"
                exact
              >
                All
              </NavLink>
            </li>
          ) : (
            <li className="menu" key={language}>
              <NavLink
                className={(isActive) =>
                  "active" + (!isActive ? " non-active" : "")
                }
                to={`/post/${language}`}
              >
                {language}
              </NavLink>
            </li>
          )
        )}

            </ul>
        )
        }

}

export default Menu;