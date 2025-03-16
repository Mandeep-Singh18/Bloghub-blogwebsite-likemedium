import { SignupInput } from "@mandeepsingh18/medium-common";
import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postinputs, setPostinputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    });

    async function Sendrequest(){
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`, postinputs);
            const jwt = response.data.jwt;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        } catch (error) {
            alert("error");
        }
    }        

    return (
        <div className="flex flex-col justify-center items-centre h-screen">
            <div className="max-w-xl mx-auto text-centre">
                <div className="px-15">
                    <div className="font-bold text-4xl">
                        {type==="signup"?"Join Bloghub.":"Welcome back."}
                    </div>
                    <div className="mt-3 font-medium">
                        {type === "signup" ? "Already have an account?" : "Don't have an account?"}
                        <a href={type === "signup" ? "/signin" : "/signup"} className="text-blue-400 underline"> {type === "signup" ? "Sign in" : "Sign up"}</a>
                    </div>
                </div>
                <div className="pt-6 space-y-2">
                    {type === "signup" ? <Labeledinput label="Name" placeholder="Enter your name" onchange={(e) => {
                        setPostinputs({
                            ...postinputs,
                            name: e.target.value
                        })
                    }} /> : null}
                    <Labeledinput label="Email" placeholder="Enter your email" onchange={(e) => {
                        setPostinputs({
                            ...postinputs,
                            email: e.target.value
                        })
                    }} />
                    <Labeledinput label="Password" type={"password"} placeholder="Enter your password" onchange={(e) => {
                        setPostinputs({
                            ...postinputs,
                            password: e.target.value
                        })
                    }} />
                    <button onClick={Sendrequest} type="button" className="text-white mt-4 w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">{type === "signup" ? "Sign up" : "Sign in"}</button>
                </div>
            </div>
        </div>
    )
}


interface labeledinputProps {
    label: string;
    placeholder: string;
    type?: string;
    onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Labeledinput({ label, placeholder, onchange, type }: labeledinputProps) {
    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-black">{label}</label>
            <input onChange={onchange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    )
} 