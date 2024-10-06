import { useLocation } from "react-router-dom"

export default function MealDetails() {
    const location = useLocation()
    const dish = location.state?.dish
    return (
        <>
            <div className="bg-stone-900 flex justify-center items-center lg:flex-row flex-col p-4">
                <img src={dish.imageURL} alt={dish.title} className=" place-items-center w-[150px] h-[150px]" />
                <div className="lg:text-start text-center md:my md:mx-16 ">
                    <h2 className="text-orange-600 font-bold text-2xl capitalize">{dish.title}</h2>
                    <p className="text-white max-w-[500px]">{dish.description}</p>
                </div>
            </div>
            <div>
                <h1>size</h1>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>            </div>
        </>
    )
}