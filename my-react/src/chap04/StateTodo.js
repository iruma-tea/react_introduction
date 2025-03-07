import {useState} from 'react';
import './StateTodo.css';

// Todo項目idの最大値(登録都度にインクリメント)
let maxId = 0;
export default function StateTodo() {
    // 入力値(title)、Todoリスト(todo)をStateで管理
    const [title, setTitle] = useState('');
    const [todo, setTodo] = useState([]);

    // テキストボックスへの入力をStateに反映
    const handleChangeTitle = e => {
        setTitle(e.target.value);
    };

    const handleClick = e => {
        // 新規Todoの追加
        setTodo(
            [
                ...todo,
                {
                    id: ++maxId,
                    title,
                    created: new Date(),
                    isDone: false
                }
            ]
        );
    };

    // [済] ボタンでTodo項目を完了状態にする
    const handlDone = e => {
        setTodo(todo.map(item => {
            if (item.id === Number(e.target.dataset.id)) {
                return {
                    ...item,
                    isDone: true
                };
            } else {
                return item
            }
        }));
    };

    // [削除]ボタンで該当するTodo項目を破棄
    const handleRemove = e => {
        setTodo(todo.filter(item => item.id !== Number(e.target.dataset.id)));
    };

    return (
        <div>
            <label>
                やること：<input type='text' name='title' value={title} onChange={handleChangeTitle} />
            </label>
            <button type='button' onClick={handleClick}>追加</button>
            <ul>
                {todo.map(item => (
                    <li key={item.id} className={item.isDone ? 'done' : ''}>
                        {item.title}
                        <button onClick={handlDone} data-id={item.id}>済</button>
                        <button onClick={handleRemove} data-id={item.id}>削除</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}