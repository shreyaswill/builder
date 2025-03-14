import "./Save.css"

export const Save: React.FC = () => {
    const save = () => {
        console.log("Saving...")
    }
    return (
        <button className="save-btn" onClick={save}>Save</button>
    );
}