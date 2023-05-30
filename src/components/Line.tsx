type Line = {
  direction?: 'horizontal' | 'vertical'
}

export const Line = ({ direction = 'horizontal' }: Line) => {
  return (
    <div class={`${direction === 'vertical' ? 'w-[1px] h-8' : 'w-full h-[1px]'} bg-neutral-300 dark:bg-neutral-500`}></div>
  )
}