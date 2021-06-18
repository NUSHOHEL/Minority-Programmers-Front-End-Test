import React from 'react';
import './Tutorials.css'
import ReactPlayer from 'react-player'
import tutorialdata from '../../../../TutorialData';
import { useState } from 'react';
import { faArrowLeft, faArrowRight, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Tutorials = () => {
    const [player, setPlayer]=useState(false)
    return (
        <div>
             <div className='tutorial-header'>
                 <div style={{display:player?'none':'block'}} className="p-5">
                    <div>
                        <h1>Week 1</h1>
                        <p>Progress</p>
                    </div>
                    <div className="text-center lh-1">
                        <p>10/10</p>
                        <progress max="100" value="100" style={{width:'600px',height:'5px',backgroundImage:'linear-gradient(90deg,#FF3684, #FFC203)'}}></progress>
                        <p>100% Completed</p>
                    </div>
                 </div>
                <div style={{display:player?'block':'none'}}>
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='100%' height='400px' />
                </div>
             </div>
             <div>                     
                           <div style={{display:player?'none':'block'}}>
                           {
                                tutorialdata.map(tutorial => <div className="tutorial-card">
                                    <div className='d-flex align-items-center m-3 w-50'>
                                    <img src={tutorial.img} alt="" style={{width:'100px'}} />
                                    <h4 onClick={()=>setPlayer(!player)}  className='ml-4'>{tutorial.activity}</h4>
                                    </div>
                                    <p className='p-2'>Completed</p>
                                </div>)
                            }
                           </div>

                            <div style={{marginTop:'120px',color:'white'}}>
                                <div className='d-flex justify-content-between'>
                                <span className="ml-3" onClick={()=>setPlayer(!player)} > <FontAwesomeIcon icon={faArrowLeft}/></span>
                                    <span  className="mr-3" onClick={()=>setPlayer(!player)} > <FontAwesomeIcon icon={faArrowRight}/> </span>
                                </div>
                                <div className="video-description">
                                <h3>Activity 1 - Join Clickup</h3>
                                <p> <FontAwesomeIcon icon={faClock}/> 12 minute </p>
                                <h3>Header</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur iusto rerum numquam repellendus fuga quod, quibusdam sunt asperiores quaerat, repudiandae blanditiis non a autem, cumque placeat repellat distinctio? Commodi odit esse a nulla! Distinctio error quas ad assumenda harum, ratione pariatur voluptatibus aut sapiente accusantium earum iusto. Unde sapiente commodi dolores fugiat odit sint laboriosam dolorem aut numquam? Distinctio facere magnam nemo nesciunt quaerat dolores tempora earum tempore natus sapiente molestiae nam voluptates, iste ipsam nihil. Hic quam repellendus asperiores eum, ipsum ratione doloribus laboriosam sit? Maiores similique sint sapiente distinctio sequi perspiciatis officia modi ipsum? Provident nostrum enim facere ipsam, et, ratione dolores repudiandae voluptatum iure iste quod, placeat odio? Quidem repudiandae accusantium reiciendis distinctio fuga, recusandae autem nemo saepe nesciunt itaque a pariatur totam praesentium odit ipsum sit laborum esse magni aliquid. Architecto cum veritatis fuga dolores animi necessitatibus, accusantium ratione error qui officiis delectus, deserunt expedita beatae nemo ipsam? Consequuntur alias repellendus, modi perspiciatis nostrum maiores. Dolore, perferendis. Quae incidunt voluptatum consequuntur earum. Perferendis deleniti dicta eum saepe, nulla, beatae, pariatur ratione veritatis voluptas inventore accusantium consectetur ipsam minus fugiat. Aut inventore eos consequatur ipsum iure voluptatum soluta laboriosam perferendis quis, sint, quam, vitae maxime! Est, similique.</p>
                                <h3>Header</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolore itaque nesciunt dolores qui ipsam facere molestiae fuga aliquid quibusdam, fugit veniam! Hic libero cumque veritatis culpa, saepe fugit enim perspiciatis quae ipsam cum aperiam praesentium. Quod, at! Officiis exercitationem qui odio ratione officia hic libero, debitis quo veritatis eveniet quod a totam omnis tempore tempora quos, earum voluptatem quis ullam id ad! Accusamus ullam temporibus quia dignissimos, error repellat voluptatem ipsa quos placeat sit, ea maxime odit provident assumenda? Distinctio voluptatem iusto voluptatum pariatur corrupti maxime inventore eaque, expedita, animi sed eum. Commodi aperiam illum iure fugit voluptate a deleniti reiciendis quis quo, error cum dicta sint placeat quia explicabo modi dolor tempora natus maxime nihil atque assumenda? Molestias ab sit, dolor non deserunt rerum deleniti harum a ad quae possimus nisi blanditiis quasi dolore sequi minima nulla temporibus, sed similique. Ducimus optio quibusdam iusto. Tenetur eligendi cumque dolor similique cum autem porro quod sunt. Incidunt non doloribus natus unde facilis sapiente. Hic rem, saepe ipsam sit tempore veniam nisi? Eum quod nisi doloremque sit in fuga pariatur ullam ea ipsam illum quasi saepe facere repellat vitae eligendi impedit ipsa deleniti, odio modi accusantium? Est repellat cumque praesentium laboriosam.</p>
                                </div>
                            </div>
             </div>
        </div>
    );
};

export default Tutorials;