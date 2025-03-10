export default function EventBasic({type}) {
    const current = () => {
        const d = new Date();
        // type属性の値に応じて現在日時をログに出力
        switch(type) {
            case 'date':
                console.log(d.toLocaleDateString());
                break;
            case 'time':
                console.log(d.toLocaleTimeString());
                break;
            default:
                console.log(d.toLocaleString());
                break;
        }
    }

    return (
        <div>
            <button onClick={current}>現在時刻を取得</button>
        </div>
    );
}