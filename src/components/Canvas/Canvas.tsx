interface CanvasProps {
        width: string;
        height: string;
        padding: string;
        bgColor: string;
        divs: number[];
    }
    
    export const Canvas: React.FC<CanvasProps> = ({ width, height, padding, bgColor, divs }) => {
        return (
            <div className="main-content" style={{ width, height, padding, backgroundColor: bgColor }}>
                <h1>Welcome to Home</h1>
                <p>This is the main content area.</p>
                {divs.map((id) => (
                    <div key={id} className="dynamic-div">Div {id}</div>
                ))}
            </div>
        );
    };
    