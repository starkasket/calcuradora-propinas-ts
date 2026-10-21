
import type { MenuItem } from '../types';

type MenuItemProps = {
    item: MenuItem,
    addItem: ((item:MenuItem) => void)
}

export default function MenuItem({ item , addItem}: MenuItemProps) {
    const { name, price } = item;

    return (
        <>
            <button onClick={() => addItem(item)} className="border-2 border-teal-400 hover:bg-teal-200 p-3 text-lg rounded-lg flex justify-between w-full">
                <span>{name}</span>
                <span className='font-black'>${price}</span>
            </button>

        </>
    )
}
