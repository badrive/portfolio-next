import Threads from '../../components/ui/Threads/Threads';

export default function Home() {
    return (
    <>
    <div className='h-[200px] w-full relative bg-black'>
        <Threads
        amplitude={3}
        distance={0}
        enableMouseInteraction={true}
    />
    </div>
    </>
  );
}