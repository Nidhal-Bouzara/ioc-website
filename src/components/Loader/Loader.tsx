import "./Loader.css";
import { FC } from "react";
const Loader: FC<{ transparent?: boolean }> = ({ transparent = false }) => {
    return (
        <div className={"Loader" + (transparent ? " transparent" : "")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -100 1689 1200">
                <g id="logo">
                    <path
                        id="circle"
                        d="M1198.3284,353.7773a354.2764,354.2764,0,0,1-177.3061,306.6994l-4.0859-29.5666.5836-.0808-5.442-38.2595-.431.0629-8.7375-63.2509L995.299,474.28a192.1818,192.1818,0,0,0,42.2375-120.503c0-106.58-86.4014-192.9853-192.9854-192.9853S651.5658,247.1978,651.5658,353.7773A192.1764,192.1764,0,0,0,693.7719,474.24l-7.615,55.1283-8.0012,57.9257-.2514-.0359-5.442,38.2639.4087.0584-4.8178,34.8784a353.9124,353.9124,0,1,1,530.2752-306.6815Z"
                    />
                    <g id="The_I" data-name="The I">
                        <path d="M968.6911,353.7773a124.14,124.14,0,1,1-124.14-124.14A124.1836,124.1836,0,0,1,968.6911,353.7773Z" />
                        <path d="M961.2782,687.7536a355.2225,355.2225,0,0,1-233.4718-.009l7.2243-52.3,4.58-33.1542.8711-6.1334-.0226-.0044L751.1185,518.97a189.6091,189.6091,0,0,0,186.8429.0224l16.0878,116.453Z" />
                    </g>
                </g>
                <g id="Text">
                    <g id="Text-I" className="letter">
                        <path
                            id="Ipoint"
                            d="M60.887,790.3878a26.0592,26.0592,0,1,1-26.0591-26.0591A26.0684,26.0684,0,0,1,60.887,790.3878Z"
                        />
                        <path
                            id="Ibase"
                            d="M69.6557,888.3258A78.44,78.44,0,0,1,0,888.3221l2.1554-21.62,1.3664-13.7057.26-2.5355-.0067-.0018,3.18-31.9069c8.2344,6.4779,17.7495,10.179,27.8754,10.179,10.1233,0,19.6343-3.6974,27.8687-10.17l4.8,48.1406Z"
                        />
                    </g>
                    <path
                        id="Text-M"
                        className="letter"
                        d="M208.5461,891.2085l-.3613-67.1182L175.62,878.726H159.7L127.3176,825.9v65.3086H94.2112V764.5708h29.4882l44.504,73.0879,43.4179-73.0879H241.11l.3623,126.6377Z"
                    />
                    <path
                        id="Text-P"
                        className="letter"
                        d="M354.54,770.27a44.2859,44.2859,0,0,1,19.5381,16.2822q6.873,10.5821,6.875,24.875,0,14.2925-6.875,24.7842A44.4993,44.4993,0,0,1,354.54,852.4028q-12.6651,5.7-29.8506,5.6992h-22.07v33.1065h-35.82V764.5708H324.69Q341.8752,764.5708,354.54,770.27Zm-15.377,54.8154q5.6045-4.7915,5.6074-13.6582,0-8.8623-5.6074-13.749-5.61-4.8852-16.6445-4.8848H302.6194v37.086h19.8994Q333.5521,829.8794,339.1633,825.0854Z"
                    />
                    <path
                        id="Text-A"
                        className="letter"
                        d="M476.8362,866.6049h-53.55l-9.95,24.6036h-36.544l55.9014-126.6377h35.2783l56.0816,126.6377H486.7864Zm-10.4932-26.413-16.2812-40.5245L433.78,840.1919Z"
                    />
                    <path
                        id="Text-C1"
                        className="letter"
                        d="M559.7839,885.3286a62.8733,62.8733,0,0,1-24.875-23.4278q-9.05-15.0145-9.0449-34.0107,0-18.9961,9.0449-34.0117a62.9,62.9,0,0,1,24.875-23.4278q15.8292-8.4126,35.7305-8.4121a76.7307,76.7307,0,0,1,31.2969,6.15,60.2533,60.2533,0,0,1,23.1562,17.73l-22.7949,20.624q-12.3046-14.8315-29.85-14.8349a36.8534,36.8534,0,0,0-18.3633,4.5234,31.3992,31.3992,0,0,0-12.4824,12.7539,42.54,42.54,0,0,0,0,37.8106A31.37,31.37,0,0,0,578.96,859.5493a36.8329,36.8329,0,0,0,18.3633,4.5224q17.5458,0,29.85-14.8349l22.7949,20.624A60.1961,60.1961,0,0,1,626.8113,887.59a76.7308,76.7308,0,0,1-31.2969,6.1514Q575.61,893.7417,559.7839,885.3286Z"
                    />
                    <path
                        id="Text-T"
                        className="letter"
                        d="M691.7566,792.9741H652.86V764.5708H766.2917v28.4033H727.5769v98.2344h-35.82Z"
                    />
                    <path
                        id="Text-O1"
                        className="letter"
                        d="M860.0906,885.2387a64.7514,64.7514,0,0,1,0-114.6972q16.0107-8.502,36.0918-8.503t36.0918,8.503a64.7515,64.7515,0,0,1,0,114.6972q-16.0109,8.505-36.0918,8.503Q876.0994,893.7417,860.0906,885.2387ZM913.55,859.5493A32.5282,32.5282,0,0,0,925.85,846.7954a41.7677,41.7677,0,0,0,0-37.8106A32.56,32.56,0,0,0,913.55,796.2309a35.6053,35.6053,0,0,0-34.7363,0,32.5341,32.5341,0,0,0-12.3008,12.7539,41.7685,41.7685,0,0,0,0,37.8106,32.5022,32.5022,0,0,0,12.3008,12.7539,35.6121,35.6121,0,0,0,34.7363,0Z"
                    />
                    <path
                        id="Text-F"
                        className="letter"
                        d="M1021.19,792.2505v27.86h55.9V847.79h-55.9v43.419H985.37V764.5708h99.3183v27.68Z"
                    />
                    <path
                        id="Text-C2"
                        className="letter"
                        d="M1181.5632,885.3286a62.8733,62.8733,0,0,1-24.875-23.4278q-9.05-15.0145-9.0449-34.0107,0-18.9961,9.0449-34.0117a62.9,62.9,0,0,1,24.875-23.4278q15.8292-8.4126,35.73-8.4121a76.7307,76.7307,0,0,1,31.2969,6.15,60.2533,60.2533,0,0,1,23.1562,17.73l-22.7949,20.624q-12.3047-14.8315-29.85-14.8349a36.8534,36.8534,0,0,0-18.3633,4.5234,31.3992,31.3992,0,0,0-12.4824,12.7539,42.54,42.54,0,0,0,0,37.8106,31.37,31.37,0,0,0,12.4824,12.7539,36.8329,36.8329,0,0,0,18.3633,4.5224q17.5458,0,29.85-14.8349l22.7949,20.624a60.1961,60.1961,0,0,1-23.1562,17.7295,76.7308,76.7308,0,0,1-31.2969,6.1514Q1197.3895,893.7417,1181.5632,885.3286Z"
                    />
                    <path
                        id="Text-O2"
                        className="letter"
                        d="M1312.7214,885.2387a64.7514,64.7514,0,0,1,0-114.6972q16.0107-8.502,36.0918-8.503t36.0918,8.503a64.7514,64.7514,0,0,1,0,114.6972q-16.0107,8.505-36.0918,8.503Q1328.7332,893.7417,1312.7214,885.2387Zm53.459-25.6894a32.5191,32.5191,0,0,0,12.3027-12.7539,41.7842,41.7842,0,0,0,0-37.8106,32.551,32.551,0,0,0-12.3027-12.7539,35.6016,35.6016,0,0,0-34.7344,0,32.5249,32.5249,0,0,0-12.3027,12.7539,41.7842,41.7842,0,0,0,0,37.8106,32.4931,32.4931,0,0,0,12.3027,12.7539,35.6085,35.6085,0,0,0,34.7344,0Z"
                    />
                    <path
                        id="Text-D"
                        className="letter"
                        d="M1438.0007,764.5708h59.8809q20.8037,0,36.9062,7.7793a58.625,58.625,0,0,1,24.9649,22.0713q8.8623,14.2938,8.8652,33.4687,0,19.1778-8.8652,33.4678a58.5808,58.5808,0,0,1-24.9649,22.0713q-16.1045,7.7813-36.9062,7.7793h-59.8809Zm58.4336,98.0537q16.2833,0,26.1426-9.2266t9.8594-25.5078q0-16.2817-9.8594-25.5088-9.8643-9.2256-26.1426-9.2266H1473.821v69.47Z"
                    />
                    <path
                        id="Text-E"
                        className="letter"
                        d="M1689.1023,863.5288v27.68h-101.67V764.5708h99.3183v27.68h-63.8613v21.3476h56.2637v26.7744h-56.2637v23.1563Z"
                    />
                </g>
            </svg>
        </div>
    );
};

export default Loader;
