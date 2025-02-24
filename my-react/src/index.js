import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppClass from './AppClass';
import './chap02/class.css';
import './chap03/MyHello'
import MyHello from './chap03/MyHello';
import EventBasic from './chap03/EventBasic';
import StateBasic from './chap03/StateBasic';
import ForList from './chap03/ForList';
import books from './chap03/books';
import ForNest from './chap03/ForNest';
import ForFilter from './chap03/ForFilter';
import ForSort from './chap03/ForSort';
import SelectStyle from './chap03/SelectStyle';
import StyledPanel from './chap03/StyledPanel';
import TitledPanel from './chap03/TitledPanel';
import ListTemplate from './chap03/ListTemplate';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// リスト2-2-4
// setInterval(() => {
//   root.render(
//     <p>現在時刻：{ (new Date()).toLocaleString() }</p>
//   );
// }, 1000);

// root.render(
//   <React.StrictMode>
//     <AppClass />
//   </React.StrictMode>
// );

// root.render(
//   <>
//     <p>こんにちは、世界！</p>
//     <p>はじめまして、React!!</p>
//   </>
// );

// const name = '鈴木';
// root.render(
//   <p>こんにちは、{name}です！</p>
// );

// const content = `<h3>WINGSプロジェクト</h3>
//   <img src="https://wings.msn.to/image/wings.jpg" />`;
// root.render(
//   <p>{content}</p>
//   // <p dangerouslySetInnerHTML={{__html: content}}></p>
// );

// root.render(
//   <div>{'Tom &amp; Jerry'}</div>
//   // <div>Tom &amp; Jerry</div>
//   // <div>{'Tom \u0026 Jerry'}</div>
//   // <div>{`Tom ${String.fromCodePoint(38)} Jerry`}</div>
//   // <div dangerouslySetInnerHTML={{__html: 'Tom &amp; Jerry'}} />
// );

// root.render(
//   <ul>
//     <li>{true}</li>
//     <li>{false}</li>
//     <li>{undefined}</li>
//     <li>{null}</li>
//     <li>{0}</li>
//   </ul>
// );

// const dest = 'https://ja.react.dev';
// root.render(
//   <a href={dest}>React本家サイト</a>
// );

// const attrs = {
//   href: 'https://wings.msn.to/',
//   download: false,
//   target: '_blank',
//   rel: 'help'
// }

// root.render(
//   // <a href={attrs.href} download={attrs.download} target={attrs.target} rel={attrs.rel}>サポートサイトへ</a>
//   <a {...attrs}>サポートサイトへ</a>
// );

// const props = 'color: White; background: Blue; padding: 3px';
// const props = {
//   color: 'White',
//   background: 'Blue',
//   padding: '3px'
// };

// root.render(
//   <p style={props}>WINGSプロジェクト</p>
// );

// root.render(
//   <p className='hoge'>WINGSプロジェクト</p>
// );

// const title = 'これからはじめるVue.js 3実践入門';

// root.render(
//   <div className='main'>
//     <p>「{title}」（SBクリエイティブ刊）</p>
//     <img src="https://wings.msn.to/books/978-4-8156-1336-5/978-4-8156-1336-5.jpg" alt={title} />
//     絶賛発売中！
//   </div>
// );

// root.render(
//   React.createElement(
//     'div',
//     { className: 'main' },
//     React.createElement(
//       'p',
//       null,
//       `「${title}」（SBクリエイティブ刊）`
//     ),
//     React.createElement(
//       'img',
//       {
//         src: 'https://wings.msn.to/books/978-4-8156-1336-5/978-4-8156-1336-5.jpg' ,
//         alt: title
//       }
//     ),
//     '絶賛発売中！'
//   )
// );

// root.render(
//   <MyHello myName="鈴木" />
// );

// root.render(
//   <EventBasic type="time" />
// );

// root.render(
//   <StateBasic init={0} />
// );

// root.render(
//   <ForList src={books} />
// );

// root.render(
//   <ForNest src={books} />
// );

// root.render(
//   <ForFilter src={books} />
// );

// root.render(
//   <ForSort src={books} />
// );

// root.render(
//   <SelectStyle mode="light" />
// );

// root.render(
//   <StyledPanel>
//     <p>メンバー募集中！</p>
//     <p>ようこそ、ＷＩＮＧＳプロジェクトへ！！</p>
//   </StyledPanel>
// );

// root.render(
//   <TitledPanel title={
//     <p>メンバー募集中！</p>
//   }
//   body={
//     <p>ようこそ、ＷＩＮＧＳプロジェクトへ！！</p>
//   }>
//   </TitledPanel>
// );

// const title = <p>メンバー募集中！</p>;
// const body = <p>ようこそ、ＷＩＮＧＳプロジェクトへ！！</p>;
// root.render(
//   <TitledPanel title={title} body={body} />
// );

// root.render(
//   <TitledPanel>
//     <p key="title">メンバー募集中！</p>
//     <p key="body">ようこそ、ＷＩＮＧＳプロジェクトへ！！</p>
//   </TitledPanel>
// );

// root.render(
//   <ListTemplate src={books}>
//     {elem =>(
//       <>
//         <dt>
//           <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
//             {elem.title}({elem.price}円)
//           </a>
//         </dt>
//         <dd>{elem.summary}</dd>
//       </>  
//     )}
//   </ListTemplate>
// );

root.render(
  <ListTemplate src={books} render={elem => (
    <>
      <dt>
        <a href={`https//wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpgs`}>
          {elem.title} ({elem.price}円)
        </a>
      </dt>
      <dd>{elem.summary}</dd>
    </>
  )} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
