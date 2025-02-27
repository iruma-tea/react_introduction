import {useState} from 'react';
import StateCounter from './StateCounter';

export default function StateParent() {
    // カウント合計を表すcountを初期化
    const [count, setCount] = useState(0);
    // Sate値(count)を更新するためのupdate関数を準備
    const update = step => setCount(c => c + step);
    return (
        <>
            <p>総カウント：{count}</p>
            <StateCounter step={1} onUpdate={update}/>
            <StateCounter step={5} onUpdate={update}/>
            <StateCounter step={-1} onUpdate={update}/>
        </>
    );
}