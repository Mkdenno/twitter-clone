import React, { useRef, useState } from 'react'
import { MdOutlinePermMedia } from 'react-icons/md'
import { AiOutlineFileGif } from 'react-icons/ai'
import { BiPoll } from 'react-icons/bi'
import { BsEmojiSmile } from 'react-icons/bs'
import { AiOutlineSchedule } from 'react-icons/ai'
import {
    // CalendarIcon,
    // EmojiHappyIcon,
    XIcon
    // PhotographIcon
} from "@heroicons/react/outline"
import Picker from '@emoji-mart/react'
import './input.css'


const Input = () => {
    const [input, setInput] = useState("")
    const [selectedFile, setSelectedFile] = useState(null)
    const filePickerRef = useRef(null)
    const [loading,setLoading]=useState(false)
    const [showEmoji, setShoEmoji] = useState(false)

    const setPost=()=>{
        if(loading) return;
        setLoading(true)
    }


    const addImageToPost = () => {

    }

    // const addEmoji = (e) => {
    //     let symbol = e.unified.split(", ")
    //     let EmojiArray = [];
    //     symbol.forEach((el) => EmojiArray.push("0x" + el))
    //     const emoji = String.fromCodePoint(...EmojiArray)
    //     setInput(input + emoji)

    // }

    const addEmoji = e => {
        console.log(e)
        let sym = e.unified.split('-');
        let codesArray = [];
    
        sym.forEach(el => codesArray.push('0x' + el));
         //console.log(codesArray)  // ["0x1f3f3", "0xfe0f"]
        let emojiPic = String.fromCodePoint(...codesArray); //("0x1f3f3", "0xfe0f")
      console.log(emojiPic) //)
    }

    return (
        <div>
            <div className={`border-b border-gray-300 p-3 flex space-x-3 `}>
                <img
                    alt="dennis kiprop"
                    src="https://pbs.twimg.com/profile_images/1433372333369085954/JmrP-zho_x96.jpg"
                    className='h-11 w-11 rounded-full cursor-pointer'
                />
                <div className='w-full divide-y divide-gray-300 color-red'>
                    <div className={`${selectedFile && "pb-7"} ${input && "space-y-2.5"}`}>
                        <textarea
                            placeholder="What's happening?"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className='w-full bg-transparent tracking-wide outline-none  placeholder-gray-500 text-lg flex align-center border-none'
                            rows='2' />
                        {
                            selectedFile && (
                                <div className='relaive'>
                                    <div className='absolute h-8 w-8 bg-[#15181c] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer'
                                        onClick={() => setSelectedFile(null)}
                                    >
                                        <XIcon className="" />

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

                            </div>
                            <div className='icon '>
                                <BiPoll className='h-[22px] text-[#1d9bf0]' />

                            </div>
                            <div className='icon relative ' onClick={() => setShoEmoji(!showEmoji)}>
                                <BsEmojiSmile className=' absolute h-[22px] text-[#1d9bf0]' />

                            </div>
                            <div className='icon text-[#1d9bf0]'>
                                <AiOutlineSchedule className='h-[22px] text-[#1d9bf0]' />

                            </div>
                            <div className="picker">
                                {
                                    showEmoji && (
                                        <Picker
                                            onSelect={addEmoji}
                                        />

                                    )

                                }
                            </div>



                        </div>
                        <button
                            className='bg-[#1d9bf0] text-white rounded-full px-4 py-1.4 font-bold
                        shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0]
                        disabled:opacity-50 disabled:cursor-default

                        '
                            disabled={!input.trim() && !selectedFile}

                        >Tweet</button>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default Input