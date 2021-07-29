import React, {Component, Fragment} from 'react';
import YouTubeComp from '../../../component/YouTubeComp/YouTubeComp';

class YoutubeCompPage extends Component {
    render(){
        return(
            <Fragment>
                <p>Youtube Component</p>
                <hr />
                <YouTubeComp
                    time="7:12"
                    title="Tutorial digebukin emak"
                    desc="1k ditonton. 2 hari lalu" />
                <YouTubeComp
                    time="5:12"
                    title="How to become jadi naruto"
                    desc="12x ditonton. 5 menit lalu" />
                <YouTubeComp
                    time="10:20"
                    title="menggoreng minyak goreng"
                    desc="10x ditonton. 20 hari lalu" />
                <YouTubeComp
                    time="2:00"
                    title="lampu dorayaki"
                    desc="0x ditonton. 1 jam lalu" />
                <YouTubeComp />
            </Fragment>
        )
    }
}
export default YoutubeCompPage;