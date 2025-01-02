
const frontpage = () => {
    return (
        <div className="flex max-w-screen-xl flex-col md:flex-row md:h-[80vh]">
            <div className="flex items-center justify-evenly text-black p-4">
                <div className="">
                    <h1 className="text-[#dc6601] text-2xl">Hello</h1>
                    <p className="py-3 text-3xl">I'm Isobelle Holden a Software Engineer</p>
                    <p className="py-3">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis autem, soluta numquam, culpa ipsam veritatis quia iure illo assumenda
                        explicabo ea sit asperiores nam illum porro, maiores nostrum dolore laboriosam,Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Earum error exercitationem commodi perferendis aperiam praesentium
                        non nobis sint,
                        dolorum iste distinctio inventore labore, omnis sapiente nulla Aliquid dolore assumenda ex
                    </p>
                    <div className="flex gap-4">
                        <button type="button" className="text-white  hover:bg-slate-900 focus:ring-4 font-medium rounded-lg text-sm p-4 dark:bg-black">Hire Me</button>
                        <button type="button" className="text-white hover:bg-[#e67f26] focus:ring-4 font-medium rounded-lg text-sm p-4 dark:bg-[#dc6601] ">Experience</button>
                    </div>
                </div>

            </div>
            <img className=" object-scale-down md:object-contain " src="https://t4.ftcdn.net/jpg/08/96/79/59/360_F_896795991_lMjObSd1wkyc3iWXOD23R6GW08MOnc3i.jpg" />
        </div>

    );
}

export default frontpage