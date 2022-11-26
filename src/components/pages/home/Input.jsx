import React, { useRef, useState } from 'react'
import { MdOutlinePermMedia } from 'react-icons/md'
import { AiOutlineFileGif } from 'react-icons/ai'
import { BiPoll } from 'react-icons/bi'
import { BsEmojiSmile } from 'react-icons/bs'
import { AiOutlineSchedule } from 'react-icons/ai'
import{
    // CalendarIcon,
    // EmojiHappyIcon,
    XIcon
    // PhotographIcon
} from "@heroicons/react/outline"
import './input.css'
// import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

const Input = () => {
    const [input, setInput] = useState("")
    const [selectedFile, setSelectedFile] = useState(null)
    const filePickerRef = useRef(null)
    const [showEmoji, setShoEmoji] = useState(false)

    const addImageToPost = () => { }
    return (
        <div>
            <div className={`border-b border-gray-300 p-3 flex space-x-3`}>
                <img
                    alt="dennis kiprop"
                    src="https://pbs.twimg.com/profile_images/1433372333369085954/JmrP-zho_x96.jpg"
                    className='h-11 w-11 rounded-full cursor-pointer'
                />
                <div className='w-full divide-y divide-gray-300 color-red'>
                    <div className={``}>
                        <textarea
                            placeholder="What's happening?"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className='w-full bg-transparent tracking-wide outline-none  placeholder-gray-500 text-lg flex align-center border-none'
                            rows='2' />
                        {
                            selectedFile && (
                                <div className='relative'>
                                    <div className='absolute h-8 w-8 bg-[#15181c] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer'
                                        onClick={() => setSelectedFile(null)}
                                    >
                                        <XIcon className=""/>
                                        {/* <h1>Yoh</h1> */}

                                    </div>
                                    <img src={selectedFile}
                                        alt=""
                                        className='rounded-2xl max-h-80 object-contain'
                                    />
                                </div>
                            )
                        }


                    </div>
                    <div className='flex item-center justify-between pt-2.5'>
                        <div className='flex items-center'>
                            <div className='icon ' onClick={() => filePickerRef.current.click()}>
                                <MdOutlinePermMedia className='h-[22px] text-[#1d9bf0]' />
                                <input type='file' hidden onChange={addImageToPost} ref={filePickerRef} />
                            </div>
                            <div className='icon '>
                                <AiOutlineFileGif className='h-[22px] text-[#1d9bf0]' />
                                {/* <span className='h-[22px] text-[#1d9bf0]'> {photograpyIcon}</span> */}

                            </div>
                            <div className='icon '>
                                <BiPoll className='h-[22px] text-[#1d9bf0]' />
                                {/* <span className='h-[22px] text-[#1d9bf0]'> {photograpyIcon}</span> */}

                            </div>
                            <div className='icon ' onClick={() => setShoEmoji(!showEmoji)}>
                                <BsEmojiSmile className='h-[22px] text-[#1d9bf0]' />
                                {/* <span className='h-[22px] text-[#1d9bf0]'> {photograpyIcon}</span> */}

                            </div>
                            <div className='icon text-[#1d9bf0]'>
                                <AiOutlineSchedule className='h-[22px] text-[#1d9bf0]' />
                                {/* <span className='h-[22px] text-[#1d9bf0]'> {photograpyIcon}</span> */}

                            </div>
                            {
                                showEmoji && (
                                    <Picker
                                        // onSelect={addEmoji}
                                        style={{
                                            position: 'absolute',
                                            marginTop: "465px",
                                            marginLeft: -40,
                                            maxWidth: "328px",
                                            borderRadius: "20px",
                                        }}
                                    />

                                )

                            }

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Input