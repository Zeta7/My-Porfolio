import React from 'react';
import './Skills_style.css';
import skills_json from './Skills.json';

const Skills = () => {
    return (
        <div className="container-skills" id="skills">
            <div className="cont-sub-titu" data-aos="fade-right">
                <h2>
                    <span>
                        <i className="fa-solid fa-caret-right" />
                    </span>{' '}
                    Skills
                </h2>
            </div>
            <div
                className="cont-card"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
            >
                {skills_json.map((ks) => (
                    <div className="card" key={ks.name}>
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle
                                    cx="70"
                                    cy="70"
                                    r="70"
                                    style={{
                                        stroke: `${ks.color}`,
                                        strokeDasharray: '440',
                                        strokeDashoffset: `calc(440 - (440 * ${ks.data}) / 100)`,
                                    }}
                                ></circle>
                            </svg>
                            <div className="number">
                                <h2>{ks.data}%</h2>
                                <p
                                    style={{
                                        fontSize: '1em',
                                        color: `${ks.color}`,
                                        fontWeight: '500',
                                        textShadow: `0 0 10px ${ks.color}, 0 0 30px ${ks.color}`,
                                    }}
                                >
                                    {ks.name}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
