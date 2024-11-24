import { Table } from '@mantine/core';
import { Accordion } from '@mantine/core';

export default function FAQ()
{


  const fallCeilingFAQS = [
    {
      value: 'What is false ceiling, and why is it used?',
      description:
        "A false ceiling is a type of ceiling that is installed below the main ceiling of a room. It is also known as a dropped ceiling or suspended ceiling. False ceiling has many advantages. It can hide the electrical wires, pipes, ducts, and other installations that are otherwise visible on the main ceiling. It can improve the acoustics of the room by reducing noise and echo. Please visit this blog post to learn more about false ceilings.",
    },
    {
      value: 'Do false ceilings reduce heat in summer?',
      description:
        "Yes, false ceilings reduce heat exposure from the roof since the heat gets trapped between the soffit and false ceiling layers. But it won't reduce the heat exposed from the walls. If you don't have air conditioners, you might feel some discomfort in the nighttime due to the hot air trapped in false ceiling layers. But you can use the exhaust fans (in & out) above the false ceiling to replace the hot air with fresh air.",
    },
    {
      value: 'Which false ceiling is best for homes?',
      description:
        'That depends on your actual requirements and purpose. If you are doing it to improve the aesthetics of your interior space, the gypsum board false ceiling is the best option for both design flexibility and longevity. Or if you need the false ceilings just for thermal purposes to reduce the heat, you should go with the 2x2 modular grid false ceiling with vinyl-faced gypsum tiles to save your budget.',
    },
    {
      value: 'How is false ceiling layer measured?',
      description:
        "False ceiling layers are usually measured in sq.ft by multiplying their length and width, while less than 1 ft width is taken in running feet and considered as sq.ft. For instance, if it's a plain false ceiling for a 10x10 room, the total area would be 100 sq.ft only. However a cove design false ceiling would be 164 sq.ft since it requires a second layer to create the cove provision for the LED string lights.",
    },
    {
      value: 'How long does a false ceiling can last?',
      description:
        "A grid false ceiling can last up to 10 years, while a plasterboard false ceiling can last over 20 years. However, the false ceiling's lifespan depends on many factors, such as the building's internal quality, weather conditions, maintenance, handling, etc. Seepage, moisture, adverse weather conditions, seashore wind, frequent weather changes, and poor building structures can severely affect the false ceiling's life.",
    },
  ];
  
  
    const elements = [
        { position: 'False Ceiling', name: "₹50 to ₹60 per sq.ft", symbol: '₹43,750 to ₹52,500' },
        { position: "Ceiling Wiring", name: "₹20 to ₹30 per sq.ft", symbol: '₹17,500 to ₹26,250' },
        { position: "Ceiling Lighting", name: "₹30 to ₹40 per sq.ft", symbol: '₹26,250 to ₹35,000' },
        { position: "Ceiling Painting", name: "₹30 to ₹40 per sq.ft", symbol: '	₹26,250 to ₹35,000' },
      ];

      const items = fallCeilingFAQS.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.Control onMouseEnter={(e)=>
            {
              e.currentTarget.style.backgroundColor="black"
            }
          } 
          onMouseLeave={(e)=>
          {
            e.currentTarget.style.backgroundColor="#111111"
          }
          }
          className='!text-white' sx={{
            "&:hover": {
              backgroundColor: "black", 
              color: "black",
            },
      }}>{item.value}</Accordion.Control>
          <Accordion.Panel>{item.description}</Accordion.Panel>
        </Accordion.Item>
      )); 

      const rows = elements.map((element) => (
        <Table.Tr key={element.name}>
          <Table.Td>{element.position}</Table.Td>
          <Table.Td>{element.name}</Table.Td>
          <Table.Td>{element.symbol}</Table.Td>
        </Table.Tr>
      ));
    return <section className="w-[90vw] h-auto max-w-[1200px] mx-auto my-20 text-white mb-[2rem]">
         <h2 className="text-2xl font-bold text-center">Frequently Asked Questions About False Ceilings</h2>

         <Accordion className='my-16 mt-8'>
            {items}
         </Accordion>

         <Table stickyHeaderOffset={60} className='rounded-md mt-8'>
          <Table.Thead className='text-black bg-white rounded-md'>
            <Table.Tr>
              <Table.Th><h3 className='text-[16px]'>Gypsum Ceiling</h3></Table.Th>
              <Table.Th><h3 className='text-[16px]'>Price Range</h3></Table.Th>
              <Table.Th><h3 className='text-[16px]'>Cost for 2 BHK</h3></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
         </Table>

    </section>
}
