
import { clearCart, removeItem, increase, decrease, calculateTotals, addItem, cartItems } from '../Cart/CartSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {AiOutlineDelete ,AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";
export function Cart() {

  const items = useAppSelector(cartItems);
  const dispatch = useAppDispatch();



  return (

    <div>
      <div className=" gap-2 mt-10 flex flex-col w-60 ">
        

        {items.map((el: any) => (
          <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 h-auto">
            <img className="w-24 h-24 md:w-24 md:h-auto md:rounded-none rounded-full mx-auto" src={el.image} alt="" width="200" height="100">
            </img>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p className="text-sm font-small">
                  {el.title}
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-amber-500 dark:text-amber-400">
                  {el.price}
                </div>

              </figcaption>
              <button className='bg-amber-400 rounded text-white flex   mb-4 ' onClick={() => dispatch(removeItem(el.id))}  >
                        < AiOutlineDelete  size={20} className='mr-4 ' />
                        Remove

                        </button>
                        <div className='flex flex-row space-x-4'>

                        <button className='bg-amber-400 rounded text-white flex   mb-4 ' >
                        < AiOutlinePlus  size={15} className='mr-4 ' />
                        

                        </button>
                        <button className='bg-amber-400 rounded text-white flex   mb-4 ' >
                        < AiOutlineMinus size={15} className='mr-4 ' />
                        

                        </button>
                        </div>

            </div>
            
          </figure>

        ))}


      </div>
    </div>



  );

}
