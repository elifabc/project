import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {useNavigate} from "react-router-dom";

const PageHeader = ({ title }) => {

    const navigate = useNavigate();

    return (
        <div>
            <div className="myPantry">
                <ArrowBackIosIcon
                    onClick={() => navigate("/Home")}
                    style={{ marginLeft: "20px" }}
                />
                <h1>{title}</h1>
            </div>
        </div>
    );
};

export default PageHeader;
