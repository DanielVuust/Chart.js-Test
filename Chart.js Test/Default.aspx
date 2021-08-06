<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Chart.js_Test._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <section class="row graph-Section">
        <div class="col-sm-6">
            <canvas id="myChart">

            </canvas>

        </div>
        <div class="col-sm-6">
            <input type="button" name="name" value="yoo" onClick="apiTest();"/>
        </div>
    </section>

</asp:Content>
