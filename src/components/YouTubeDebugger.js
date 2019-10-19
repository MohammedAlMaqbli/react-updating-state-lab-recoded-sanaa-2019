import React, { Component } from 'react'

export class YouTubeDebugger extends Component {
    constructor(props) {
        super(props)

        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }

        }
    }
    handleBitrate = () => {
        this.setState(
            {
                errors: [],
                user: null,
                settings: {
                    bitrate: 12,
                    video: {
                        resolution: '1080p'
                    }
                }

            }
        )
    }
    handleResolution = () => {
        let bitr = this.state.settings.bitrate
        this.setState({
            errors: [],
            user: null,
            settings: {
                bitrate: bitr,
                video: {
                    resolution: '720p'
                }
            }

        })
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitrate}>Change bitrate</button>
                <button className="resolution" onClick={this.handleResolution}></button>
            </div>
        )
    }
}

export default YouTubeDebugger 
