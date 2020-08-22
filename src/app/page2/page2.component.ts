import { Component, OnInit } from '@angular/core';
import { CommService } from '../comm.service'
import { PageData } from '../shared/pagedata.model'
import { McqData } from '../shared/mcqdata.model'
import { RefData } from '../shared/refdata.model'
import {RespData} from '../shared/respdata.model'
import {Router} from '@angular/router';
import {DbacessService} from '../db/dbacess.service'
import { SurveyData } from '../shared/surveydata.model';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private commservice:CommService,private router:Router,private db:DbacessService) { }
  q: McqData[];
  q1: McqData[];
  q2: McqData[];
  q3:McqData[];
  stq:string;
  stq1:string;
  stq2:string;
  stq3:string;
  ngOnInit(): void {
    this.commservice.currentpage=3;
    this.q = [{
      textanswer: "User Text answer",
      options: ["Satisfactory", "Needs Revamp", "New program to be implemented"],
      allowtextanswer: false,
      question: "Present Status in Karnataka",
      answer: 0
    },
    {
      textanswer: "User Text answer",
      options: ["Administrative", "Pedagogical", "Other"],
      allowtextanswer: false,
      question: "Nature of Implication",
      answer: 0
    },
    {
      textanswer: "User Text answer",
      options: ["Short Term", "Long Term"],
      allowtextanswer: false,
      question: "Implementation timeline",
      answer: 0
    }]
    this.q1 = [{
      textanswer: "User Text answer",
      options: ["Satisfactory", "Needs Revamp", "New program to be implemented"],
      allowtextanswer: false,
      question: "Present Status in Karnataka",
      answer: 0
    },
    {
      textanswer: "User Text answer",
      options: ["Administrative", "Pedagogical", "Other"],
      allowtextanswer: false,
      question: "Nature of Implication",
      answer: 0
    },
    {
      textanswer: "User Text answer",
      options: ["Short Term", "Long Term"],
      allowtextanswer: false,
      question: "Implementation timeline",
      answer: 0
    }];
    this.q2 = [{
      textanswer: "User Text answer",
      options: ["Satisfactory", "Needs Revamp", "New program to be implemented"],
      allowtextanswer: false,
      question: "Present Status in Karnataka",
      answer: 0
    },
    {
      textanswer: "User Text answer",
      options: ["Administrative", "Pedagogical", "Other"],
      allowtextanswer: false,
      question: "Nature of Implication",
      answer: 0
    },
    {
      textanswer: "User Text answer",
      options: ["Short Term", "Long Term"],
      allowtextanswer: false,
      question: "Implementation timeline",
      answer: 0
    }];

    this.q3=[{
      textanswer: "User Text answer",
      options: ["Satisfactory", "Needs Revamp", "New program to be implemented"],
      allowtextanswer: false,
      question: "Present Status in Karnataka",
      answer: 0
    },
    {
      textanswer: "User Text answer",
      options: ["Administrative", "Pedagogical", "Other"],
      allowtextanswer: false,
      question: "Nature of Implication",
      answer: 0
    },
    {
      textanswer: "User Text answer",
      options: ["Short Term", "Long Term"],
      allowtextanswer: false,
      question: "Implementation timeline",
      answer: 0
    }

    ]
  }


  kickdata() {
    let resp1:RespData={
      mcq:this.q,
      suggestion:""
    }
    let resp2:RespData={
      mcq:this.q1,
      suggestion:""
    }
    let resp3:RespData={
      mcq:this.q2,
      suggestion:""
    }
    let resp4:RespData={
      mcq:this.q3,
      suggestion:""
    }
    let ref1: RefData = {
      ref: "2.5",
      descr: "An interim 3-month play-based ‘school preparation module’ for all Grade 1 students, consisting of activities and workbooks consisting components of foundational literacy and numeracy will be prepared",
      response:resp1
    };
    let ref2: RefData = {
      ref: "2.6",
      descr: "A national repository of high-quality resources on foundational literacy and numeracy will be made available on the Digital Infrastructure for Knowledge Sharing (DIKSHA).",
      response:resp2
    }
    let ref3:RefData={
      ref: "2.7",
      descr:"peer-tutoring will be introduced to promote foundational literacy and numeracy.",
      response:resp3
    }
    let ref4:RefData={
      ref: "2.9",
      descr:"Children are provided simple but energizing breakfast in addition to midday meals. All school children shall undergo regular health check-ups especially for 100% immunization in schools and health cards will be issued to monitor the same.",
      response:resp4
    }
    this.commservice.page2data={
      topicid:"1002",
      topicname:"Foundational Literacy and Numeracy (FLN)",
      data:[ref1,ref2,ref3,ref4]
    }
    // let s=this.commservice.surveydata.length;
    this.commservice.surveydata.survey.push(this.commservice.page2data);
    console.log(this.commservice.surveydata)
    this.db.dumpsurvey(this.commservice.surveydata).subscribe(
      (data:SurveyData)=>{
        console.log(data);
      },
      (error:any)=>console.log(error)
    )
    console.log("I think it worked");
    this.commservice.currentpage=1;
    this.router.navigate(['']);
  }

}
