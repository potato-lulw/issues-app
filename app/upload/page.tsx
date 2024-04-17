'use client'

import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'
import { sources } from 'next/dist/compiled/webpack/webpack';

interface CloudinaryResult {
    public_id: string;
}

const UploadPage = () => {

    const [publicId, setPublicId] = useState("");
    return (
        <>
            {
                publicId && (<CldImage src={publicId} width={250} height={190} alt='test' />)
            }
            <CldUploadWidget
                uploadPreset='n3qz05lc'
                onSuccess={(result, options) => {
                    console.log(result);
                    const info = result.info as CloudinaryResult;
                    setPublicId(info.public_id)
                }}
                options={
                    {
                        sources: ['google_drive', 'local'],
                        styles: {
                            palette: {
                                window: "#000000",
                                sourceBg: "#000000",
                                windowBorder: "#8E9FBF",
                                tabIcon: "#FFFFFF",
                                inactiveTabIcon: "#8E9FBF",
                                menuIcons: "#FFF",
                                link: "#FFF",
                                action: "#eee",
                                inProgress: "#FFF",
                                complete: "#33ff00",
                                error: "#EA2727",
                                textDark: "#000000",
                                textLight: "#FFFFFF"
                            },
                            fonts: {
                                default: null,
                                "'Fira Sans', sans-serif": {
                                    url: "https://fonts.googleapis.com/css?family=Fira+Sans",
                                    active: true
                                }
                            }

                        }
                    }
                }
            >
                {
                    ({ open }) => (
                        <button className='btn btn-primary ' onClick={() => open()}>Open</button>
                    )
                }
            </CldUploadWidget>
        </>
    )
}

export default UploadPage