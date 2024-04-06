import React from "react";
import { useSearchParams } from "react-router-dom";

const AboutComponent = (props) => {
    const { message } = props;
    const [searchParams] = useSearchParams();

    const searchKeys = Array.from(searchParams.keys());

    return (
        <div>
            <h1>{message}</h1>
            {searchKeys.length > 0 && (
                <div>
                    You searched for:
                    {searchKeys.map(key => (
                        <div key={key}>
                            {`${key} --> ${searchParams.get(key)}`}
                        </div>
                    ))}
                </div>
            )}
            <h3>Contact: mailme@devmind.ro</h3>
        </div>
    );
};

export default AboutComponent;
