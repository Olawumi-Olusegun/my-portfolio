"use client";


import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import { FileCode, Github, Loader2, Mail, Twitter, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form';
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from '@/components/ui/textarea';
import ContainerWrapper from '@/components/ui/ContainerWrapper';


type Props = {}

const MessageFormSchema = z.object({
  fullname: z.string().min(3),
  email: z.string().min(3).email(),
  message: z.string().min(3),
});

type MessageFormSchemaType = z.infer<typeof MessageFormSchema>;

const delay = (delayInms: number) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
};

function Homepage({}: Props) {

  const form = useForm<MessageFormSchemaType>({
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(MessageFormSchema)
  });

  const errors = form.formState.errors;

  const isSubmitting = form.formState.isSubmitting;
  const isRequiredFieldEmpty = !form.formState.isValid;

  const onSubmit = async (values: MessageFormSchemaType) => {
    if(isSubmitting) return;
      try {
        const timeDelay = await delay(5000);
        form.reset();
      } catch (error) {
      } finally {}
  }



  return (
    <>
    <div  id='hero' className="w-full mt-12 md:mt-[8rem]">
     {/* Hero section */}
      <ContainerWrapper>
        <div  className="grid grid-cols-1 sm:grid-cols-2 pb-20 gap-5 bg-white">
          <div className="flex flex-col items-center sm:items-start ">
            <h1 className="text-center w-[90%] md:w-full sm:text-left text-lg font-bold underline ">Hi, My name is Olawumi Olusegun</h1>
            <h1 className="text-center w-[90%] md:w-full sm:text-left text-3xl md:text-4xl lg:text-6xl font-bold py-5 pt-2 ">{"I'm"} a Fullstack Software Engineer.</h1>
            <div className="flex items-center gap-2 pb-10 ">
              
              <Link href={"https://github.com/Olawumi-Olusegun"} target='_blank' >
                <Button className='bg-black text-white hover:text-white duration-300 rounded-full '> 
                <Github size={15} className='mr-2' />
                <span>Github</span> 
              </Button>
              </Link>

              <Link href={"#contact"}>
                <Button className='bg-black text-white hover:text-white duration-300 rounded-full '> 
                  <User size={15} className='mr-2' />
                  <span>Hire Me</span>
                </Button>
              </Link>

            </div>
          </div>
          <div className="overflow-hidden  h-[300px] lg:h-[350px]">
            <img
            src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="image"
            className='w-full h-full object-cover rounded-md pointer-events-none '
            />
          </div>
        </div>
      </ContainerWrapper>

      {/* Tech stacks */}
      <div id='stacks' className="py-10 w-full ">
        <ContainerWrapper className='w-[90%] md:w-[80%] mx-auto'>
          <h1 className='text-center text-3xl font-semibold uppercase'>Tech Stacks</h1>
          <div className="flex items-center justify-center flex-wrap gap-3 my-10">
            <div className="flex gap-2 p-5 bg-gray-100 rounded-md hover:bg-gray-200 duration-300 ">
              <FileCode size={20} />
              <span>HTML</span>
            </div>
            <div className="flex gap-2 p-5 bg-gray-100 rounded-md hover:bg-gray-200 duration-300 ">
             <FileCode size={20} />
              <span>CSS</span>
            </div>
            <div className="flex gap-2 p-5 bg-gray-100 rounded-md hover:bg-gray-200 duration-300 ">
             <FileCode size={20} />
              <span>TAILWIND CSS</span>
            </div>
            <div className="flex gap-2 p-5 bg-gray-100 rounded-md hover:bg-gray-200 duration-300 ">
             <FileCode size={20} />
              <span>JAVASCRIPT</span>
            </div>
            <div className="flex gap-2 p-5 bg-gray-100 rounded-md hover:bg-gray-200 duration-300 ">
             <FileCode size={20} />
              <span>TYPESCRIPT</span>
            </div>
            <div className="flex gap-2 p-5 bg-gray-100 rounded-md hover:bg-gray-200 duration-300">
             <FileCode size={20} />
              <span>REACT</span>
            </div>
            <div className="flex gap-2 p-5 bg-gray-100 rounded-md hover:bg-gray-200 duration-300">
             <FileCode size={20} />
              <span>NEXT JS</span>
            </div>
            <div className="flex gap-2 p-5 bg-gray-100 rounded-md hover:bg-gray-200 duration-300">
             <FileCode size={20} />
              <span>NODE JS</span>
            </div>
            <div className="flex gap-2 p-5 bg-gray-100 rounded-md hover:bg-gray-200 duration-300">
             <FileCode size={20} />
              <span>EXPRESS JS</span>
            </div>
            <div className="flex gap-2 p-5 bg-gray-100 rounded-md hover:bg-gray-200 duration-300">
             <FileCode size={20} />
              <span>REDUX/REDUX-TOOLKIT</span>
            </div>
            <div className="flex gap-2 p-5 bg-gray-100 rounded-md hover:bg-gray-200 duration-300">
             <FileCode size={20} />
              <span>MONGO DB</span>
            </div>
            <div className="flex gap-2 p-5 bg-gray-100 rounded-md hover:bg-gray-200 duration-300">
             <FileCode size={20} />
              <span>JSON WEBTOKEN</span>
            </div>
            <div className="flex gap-2 p-5 bg-gray-100 rounded-md hover:bg-gray-200 duration-300">
             <FileCode size={20} />
              <span>GIT/GITHUB</span>
            </div>
          </div>
        </ContainerWrapper>
      </div>
     
     {/* Projects */}
      <ContainerWrapper id='projects' className='pb-20'>
        
        <h1 className='text-center text-3xl pb-20 font-semibold uppercase'>Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 bg-white">
          
          <div className="flex flex-col gap-2  border rounded-md pb-2 ">
            <div className="overflow-hidden h-[300px]">
              <img
              src="/images/properties.png" 
              alt="image"
              className='w-full h-full object-cover rounded-md pointer-events-none '
              />
            </div>
            <a href={"https://propertypulse-wine.vercel.app"} target='_blank' className='self-end p-3'>
              <Button size={"sm"} >Live Demo</Button>
            </a>
          </div>
          
          <div className="flex flex-col gap-2  border rounded-md pb-2 ">
            <div className="overflow-hidden h-[300px]">
              <img
              src="/images/aleeph.png" 
              alt="image"
              className='w-full h-full object-cover rounded-md pointer-events-none '
              />
            </div>
            <a href={"https://www.aleephng.com"} target='_blank' className='self-end p-3' >
              <Button size={"sm"} >Live Demo</Button>
            </a>
          </div>
          
          <div className="flex flex-col gap-2  border rounded-md pb-2 ">
            <div className="overflow-hidden h-[300px]">
              <img
              src="/images/travelrouters.png" 
              alt="image"
              className='w-full h-full object-cover rounded-md pointer-events-none '
              />
            </div>
            <a href={"https://www.travelroutersng.com/latestUpdate/public/"} target='_blank' className='self-end p-3'>
              <Button size={"sm"} >Live Demo</Button>
            </a>
          </div>
          
          <div className="flex flex-col gap-2  border rounded-md pb-2 ">
            <div className="overflow-hidden h-[300px]">
              <img
              src="/images/jobboard.png" 
              alt="image"
              className='w-full h-full object-cover rounded-md pointer-events-none '
              />
            </div>
            <a href={"https://job-board-portal.vercel.app"} target='_blank' className='self-end p-3' >
              <Button size={"sm"} >Live Demo</Button>
            </a>
          </div>
          
      

        </div>
      </ContainerWrapper>
    
    {/* Contact */}
      <div id='contact' className="w-full bg-gray-50 py-20 border-y ">
        <ContainerWrapper className=''>
          <h1 className='text-3xl font-bold text-center uppercase'>Get In Touch Today</h1>
          <p className='text-center w-full lg:w-[80%] mx-auto my-8 font-normal text-gray-500 '>As a full-stack web developer, I am passionate about turning ideas into reality through innovative and efficient web solutions. Whether you need a stunning website, a dynamic web application, or custom development services, {"I'm"} here to help. {"Let's"} collaborate and make your project a success. Reach out today!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
          
        <div className="items-end">
          <div className="flex flex-col items-center justify-end gap-5 ml-auto">
            <Mail size={20} />
            <span className='text-sm font-semibold'>Email: olawumi.olusegun@gmail.com</span>
            <span className='text-sm font-semibold'>Phone number: +234 706 506 6382</span>
            <a href="mailto: olawumi.olusegun@gmail.com">
              <Button className='rounded-full bg-black hover:text-white text-white'>Send Message</Button>
            </a>
          </div>
        </div>
          
          <div className="mt-5">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4' >
                
                <FormField 
                control={form.control}
                name='fullname'
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Fullname:</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter your fullname' {...field} />
                    </FormControl>
                    {errors.fullname && <span className='text-xs text-red-500'>{errors.fullname.message}</span> }
                  </FormItem>
                )}
                />

                <FormField 
                  control={form.control}
                  name='email'
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Email:</FormLabel>
                      <FormControl>
                        <Input placeholder='Enter your email' {...field} />
                      </FormControl>
                      {errors.email && <span className='text-xs text-red-500'>{errors.email.message}</span> }
                    </FormItem>
                  )}                
                />

                <FormField 
                control={form.control}
                name='message'
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder='Enter your message' {...field}></Textarea>
                    </FormControl>
                    {errors.message && <span className='text-xs text-red-500'>{errors.message.message}</span> }
                  </FormItem>
                )}
                />
              <Button disabled={isSubmitting || isRequiredFieldEmpty } type={isSubmitting ? 'button' : 'submit'} className="w-full my-5 rounded-full disabled:cursor-not-allowed ">
                { isSubmitting && <Loader2  size={20} className="animate-spin mr-2" />}
                <span> {isSubmitting ? "Please wait..." : "Submit" } </span>
              </Button>
              </form>
            </Form>

          </div>
        
        </div>
        </ContainerWrapper>
      </div>


    {/* Footer */}
      <div id='footer' className="w-full py-20">
        <ContainerWrapper>
          <div className="flex flex-col items-center gap-2">

            <div className="flex items-center gap-3">
              
              <a href='https://github.com/Olawumi-Olusegun' target='_blank'> 
                <Button className='rounded-full min-h-10 min-w-10 p-2 bg-black hover:text-white text-white '>
                  <Github size={20} />
                </Button>
              </a>
              
              <a href='https://twitter.com/olawumi_ade' target='_blank'> 
                <Button className='rounded-full min-h-10 min-w-10 p-2 bg-black hover:text-white text-white '>
                  <Twitter size={20} />
                </Button>
              </a>
            
            </div>

            <p className='text-sm text-center font-semibold'>&copy; { new Date().getFullYear() } Olawumi Olusegun. </p>
          </div>
        </ContainerWrapper>
      </div>

    </div>
    </>
  )
}

export default Homepage