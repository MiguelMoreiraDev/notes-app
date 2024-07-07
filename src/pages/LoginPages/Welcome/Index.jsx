import React from "react";
import * as S from "./Styles";

export const Welcome = () => {
    return (
        <div>
            <div>
                <img src="" alt="" />
                <h1>
                    Jot Down anything you want to achieve, today or in the
                    future
                </h1>
                {Array(3)
                    .fill(0)
                    .map((_, index) => (
                        <p>Oi</p>
                    ))}
            </div>
            <div>
                <button>Login</button>
            </div>
        </div>
    );
};
