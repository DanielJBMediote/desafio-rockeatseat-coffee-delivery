import { CheckFat, ShoppingCart } from '@phosphor-icons/react';
import { useState } from 'react';

interface ItemCardFooterCartActionProps {
  onClick: () => void;
}

export function ItemCardFooterCartAction({ onClick }: ItemCardFooterCartActionProps) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    if (isClicked) return;

    setIsClicked(true);
    onClick();

    setTimeout(() => {
      setIsClicked(false);
    }, 700);
  }

  return (
    <button
      type="button"
      className={`flex items-center justify-center cursor-pointer p-2 rounded-md transition-colors duration-300 
        ${isClicked ? 'bg-yellow hover:bg-yellow-dark text-yellow-light' : 'bg-purple hover:bg-purple-dark text-base-card'}`}
      onClick={handleClick}
    >
      {isClicked ? <CheckFat size={20} weight='fill' /> : <ShoppingCart size={20} weight="fill" />}
    </button>
  );
}
